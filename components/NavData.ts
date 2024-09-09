export type NavigationProps = {
  title: string;
  url?: string;
  children?: NavigationProps[];
}

export const navigation: NavigationProps[] = [
  { title: 'Home', url: '/' },
  {
    title: 'Products',
    children: [
      { title: 'Men', url: '/products/men' },
      { title: 'Women', url: '/products/women' },
      {
        title: 'Electronics',
        children: [
          { title: 'Phones', url: '/products/electronics/phones' },
          { title: 'Laptops', url: '/products/electronics/laptops' },
          {
            title: 'Accessories',
            children: [
              { title: 'Chargers', url: '/products/electronics/accessories/chargers' },
              { title: 'Headphones', url: '/products/electronics/accessories/headphones' },
            ],
          },
        ],
      },
      {
        title: 'Home Appliances',
        children: [
          { title: 'Refrigerators', url: '/products/home-appliances/refrigerators' },
          { title: 'Washing Machines', url: '/products/home-appliances/washing-machines' },
          {
            title: 'Microwaves',
            children: [
              { title: 'Convection', url: '/products/home-appliances/microwaves/convection' },
              { title: 'Grill', url: '/products/home-appliances/microwaves/grill' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Services',
    children: [
      { title: 'Same Day Delivery', url: '/services/same-day-delivery' },
      { title: 'Customized Services', url: '/services/customized-services' },
      { title: 'Warranty Services', url: '/services/warranty-services' },
      { title: 'Installation Services', url: '/services/installation-services' },
    ],
  },
  {
    title: 'Support',
    children: [
      { title: 'FAQ', url: '/support/faq' },
      { title: 'Customer Support', url: '/support/customer-support' },
      { title: 'Return Policy', url: '/support/return-policy' },
    ],
  },
  { title: 'About', url: '/about' },
  { title: 'Contact', url: '/contact' },
  {
    title: 'Blog',
    children: [
      { title: 'Tech News', url: '/blog/tech-news' },
      { title: 'Product Reviews', url: '/blog/product-reviews' },
      { title: 'How-To Guides', url: '/blog/how-to-guides' },
    ],
  },
];
