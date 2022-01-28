import React from 'react';
import { FaSearch } from 'react-icons/fa';
import shortid from 'shortid';
import ContactUs from '../../components/ContactUse';
import PopularArticle from '../../components/PopularHelpArticle';
import Breadcrumb from '../../components/SearchingBooking/Breadcrumb';
import SearchItems from '../../components/SearchingBooking/SearchItems';
import Heading from '../../components/SearchingBooking/shared/Heading';
import Sidebar from '../../components/SearchingBooking/Sidebar';

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
        <Heading text='Searching and Booking' mb={2} />
        <Breadcrumb links={links} />
        <div className='md:flex border-b  mb-10'>
          <SearchItems />
          <Sidebar title={'Search and Booking'} list={items} Icon={FaSearch} />
        </div>
        <PopularArticle />
        <ContactUs />
      </div>
    </div>
  );
};

export default SearchingBooking;
