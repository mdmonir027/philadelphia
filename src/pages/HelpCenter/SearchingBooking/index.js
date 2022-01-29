import React from 'react';
import { FaSearch } from 'react-icons/fa';
import shortid from 'shortid';
import ContactUs from '../../../components/HelpCenter/ContactUse';
import PopularArticle from '../../../components/HelpCenter/PopularHelpArticle';
import SearchItems from '../../../components/HelpCenter/SearchingBooking/SearchItems';
import RightSidebar from '../../../components/HelpCenter/Shared/RightSidebar';
import SectionBar from '../../../components/HelpCenter/Shared/SectionBar';

const links = [
  {
    id: shortid(),
    value: 'Help Center',
    url: '/help-center',
  },
  {
    id: shortid(),
    value: 'Searching and Booking',
    url: '/searching-booking',
  },
  {
    id: shortid(),
    value: 'Search Tips',
    url: '/search-tips',
  },
];
const items = [
  {
    id: shortid(),
    value: 'Search tips',
    url: '/',
    isActive: true,
  },
  {
    id: shortid(),
    value: 'Booking places to stay',
    url: '/',
    isActive: false,
  },
  {
    id: shortid(),
    value: 'Booking experiences',
    url: '/',
    isActive: false,
  },
  {
    id: shortid(),
    value: 'Business travel and events',
    url: '/',
    isActive: false,
  },
  {
    id: shortid(),
    value: 'Communicating with hosts',
    url: '/',
    isActive: false,
  },
  {
    id: shortid(),
    value: 'Search tips',
    url: '/',
    isActive: true,
  },
  {
    id: shortid(),
    value: 'Booking places to stay',
    url: '/',
    isActive: false,
  },
  {
    id: shortid(),
    value: 'Booking experiences',
    url: '/',
    isActive: false,
  },
  {
    id: shortid(),
    value: 'Business travel and events',
    url: '/',
    isActive: false,
  },
  {
    id: shortid(),
    value: 'Communicating with hosts',
    url: '/',
    isActive: false,
  },
];
const SearchingBooking = () => {
  return (
    <div className='mt-10'>
      <div className='custom-container'>
        <SectionBar text='Searching and Booking' mb={2} links={links} />
        <div className='md:flex border-b  mb-10'>
          <SearchItems />
          <div className='w-full md:w-1/4'>
            <RightSidebar
              title={'Search and Booking'}
              list={items}
              Icon={FaSearch}
            />
          </div>
        </div>
        <PopularArticle />
        <ContactUs />
      </div>
    </div>
  );
};

export default SearchingBooking;
