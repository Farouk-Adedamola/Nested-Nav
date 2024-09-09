'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { NavigationProps, navigation } from './NavData';
import RightArrowIcon from './svgs/RightArrowIcon';
import BackArrowIcon from './svgs/BackArrowIcon';
import Hamburger from './svgs/Hamburger';


const Header = () => {
   const router = useRouter();
  const [currentNav, setCurrentNav] = useState<NavigationProps[]>(navigation);
  const [navHistory, setNavHistory] = useState<{ nav: NavigationProps[], title: string }[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Handle click on a navigation item
  const handleNavClick = (item: NavigationProps) => {
    if (item.url) {
      router.push(item.url);
    } else if (item.children) {
      setNavHistory((prevHistory) => [...prevHistory, { nav: currentNav, title: item.title }]);
      setCurrentNav(item.children);
    }
  };

  // Handle back button to return to previous navigation
  const handleClickBack = () => {
    const newHistory = [...navHistory];
    const previousState = newHistory.pop(); 
    setNavHistory(newHistory);
    setCurrentNav(previousState?.nav || navigation); 
  };


  const parentTitle = navHistory.length > 0 ? navHistory[navHistory.length - 1].title : '';



  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Challenge</h1>

        <button
          className="block"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger/>
        </button>
      </div>

      {isOpen && (
        <div className=" bg-gray-700">
          <div className="container mx-auto px-4 py-4">
            {navHistory.length > 0 && (
              <div className="back-button mb-4 flex items-center">
                <button
                  className="text-gray-400 hover:text-white"
                  onClick={handleClickBack}
                >
                  <BackArrowIcon/>
                </button>
                 <h3 className="ml-4 text-lg">{parentTitle}</h3>
              </div>
            )}
            <ul>
              {currentNav.map((item, index) => (
                <li key={index}>
                  <button
                    className=" w-full text-left py-2 px-4 text-gray-200 hover:bg-gray-600 rounded-md  flex items-center"
                    onClick={() => handleNavClick(item)}
                  >
                    {item.title}
                    {item.children && <RightArrowIcon />}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

