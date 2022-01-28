import React from 'react';
import { FaChartBar, FaRegCalendarAlt, FaSearch } from 'react-icons/fa';
import shortid from 'shortid';
import Box from './Box';

const item1 = {
  icon: FaSearch,
  title: 'Searching and booking',
  list: [
    {
      id: shortid(),
      value: 'Search tips',
      url: '/',
    },
    {
      id: shortid(),
      value: 'Booking places to stay',
      url: '/',
    },
    {
      id: shortid(),
      value: 'Booking experiences',
      url: '/',
    },
    {
      id: shortid(),
      value: 'Business travel and events',
      url: '/',
    },
    {
      id: shortid(),
      value: 'Communicating with hosts',
      url: '/',
    },
  ],
};
const item2 = {
  icon: FaRegCalendarAlt,
  title: 'Your reservations',
  list: [
    {
      id: shortid(),
      value: 'Changes',
      url: '/',
    },
    {
      id: shortid(),
      value: 'Cancellations',
      url: '/',
    },
    {
      id: shortid(),
      value: 'Checking in',
      url: '/',
    },
    {
      id: shortid(),
      value: 'Experience',
      url: '/',
    },
    {
      id: shortid(),
      value: 'Troubleshooting',
      url: '/',
    },
  ],
};
const item3 = {
  icon: FaChartBar,
  title: 'Payments and refunds',
  list: [
    {
      id: shortid(),
      value: 'Paying for a reservation',
      url: '/',
    },
    {
      id: shortid(),
      value: 'Refunds',
      url: '/',
    },
    {
      id: shortid(),
      value: 'Pricing and fees',
      url: '/',
    },
    {
      id: shortid(),
      value: 'Security deposits',
      url: '/',
    },
    {
      id: shortid(),
      value: 'Coupons, credits, and gift cards',
      url: '/',
    },
  ],
};

const allItems = [item1, item2, item3];

const AllBoxes = () => {
  return (
    <div className='md:flex flex-wrap'>
      {allItems.map((item) => (
        <Box
          key={Math.random()}
          Icon={item.icon}
          title={item.title}
          list={item.list}
        />
      ))}
    </div>
  );
};

export default AllBoxes;
