import React from 'react';
import shortid from 'shortid';
import BottomFooter from './BottomFooter';
import FooterMenuSection from './FooterMenuSection';

const menu1 = [
  {
    id: shortid(),
    url: '#',
    value: 'How it works',
  },
  {
    id: shortid(),
    url: '#',
    value: 'Newsroom',
  },
  {
    id: shortid(),
    url: '#',
    value: 'Apartments for Work',
  },
  {
    id: shortid(),
    url: '#',
    value: 'Careers',
  },
  {
    id: shortid(),
    url: '#',
    value: 'About us',
  },
  {
    id: shortid(),
    url: '#',
    value: 'Media',
  },
];

const menu2 = [
  {
    id: shortid(),
    url: '#',
    value: 'Diversity & Belonging',
  },
  {
    id: shortid(),
    url: '#',
    value: 'Against Discrimination',
  },
  {
    id: shortid(),
    url: '#',
    value: 'Accessibility',
  },
  {
    id: shortid(),
    url: '#',
    value: 'Invite friends',
  },
  {
    id: shortid(),
    url: '#',
    value: 'Gift cards',
  },
];
const menu3 = [
  {
    id: shortid(),
    url: '#',
    value: 'Host your home',
  },
  {
    id: shortid(),
    url: '#',
    value: 'Host an Experience',
  },
  {
    id: shortid(),
    url: '#',
    value: 'Host an Experience',
  },
  {
    id: shortid(),
    url: '#',
    value: 'Open Homes',
  },
  {
    id: shortid(),
    url: '#',
    value: 'Resource Center',
  },
  {
    id: shortid(),
    url: '#',
    value: 'Community',
  },
];
const menu4 = [
  {
    id: shortid(),
    url: '#',
    value: 'Updates for COVID-19',
  },
  {
    id: shortid(),
    url: '#',
    value: 'Help Center',
  },
  {
    id: shortid(),
    url: '#',
    value: 'Cancellation',
  },
  {
    id: shortid(),
    url: '#',
    value: 'Neighborhood Support',
  },
  {
    id: shortid(),
    url: '#',
    value: 'Trust & Safety',
  },
];

const Footer = () => {
  return (
    <>
      <div className='bg-[#f7f7f7] py-12'>
        <div className='custom-container'>
          <div className='sm:flex sm:flex-wrap '>
            <div className='w-full sm:w-1/2 lg:w-1/4'>
              <FooterMenuSection title='About' items={menu1} />
            </div>
            <div className='w-full sm:w-1/2 lg:w-1/4'>
              <FooterMenuSection title='Community' items={menu2} />
            </div>
            <div className='w-full sm:w-1/2 lg:w-1/4'>
              <FooterMenuSection title='Become Host' items={menu3} />
            </div>
            <div className='w-full sm:w-1/2 lg:w-1/4'>
              <FooterMenuSection title='Bookings support' items={menu4} />
            </div>
          </div>
        </div>
      </div>
      <BottomFooter />
    </>
  );
};

export default Footer;
