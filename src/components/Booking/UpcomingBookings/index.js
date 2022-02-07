import React, { useState } from 'react';
import AllItems from './AllItems';
import BookingHeading from './BookingHeading';
import EmptyItems from './EmptyItems';
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const ITEMS1 = [
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    apartmentImage:
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Charming and comfortable house',
    paymentStatus: 0,
    userImage:
      'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    apartmentImage:
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Charming and comfortable house',
    paymentStatus: 1,
    userImage:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    apartmentImage:
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Charming and comfortable house',
    paymentStatus: 0,
    userImage:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    apartmentImage:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Charming and comfortable house',
    paymentStatus: 1,
    userImage:
      'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    apartmentImage:
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Charming and comfortable house',
    paymentStatus: 1,
    userImage:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];
const ITEMS2 = [
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    apartmentImage:
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
    title: 'Charming and comfortable house',
    paymentStatus: 1,
    userImage:
      'https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    apartmentImage:
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    title: 'Charming and comfortable house',
    paymentStatus: 0,
    userImage:
      'https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    apartmentImage:
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
    title: 'Charming and comfortable house',
    paymentStatus: 0,
    userImage:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    apartmentImage:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    title: 'Charming and comfortable house',
    paymentStatus: 1,
    userImage:
      'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    apartmentImage:
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg',
    title: 'Charming and comfortable house',
    paymentStatus: 0,
    userImage:
      'https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];
const UpcomingBookingsContainer = () => {
  const [hasData] = useState(true);
  if (!hasData) {
    return <EmptyItems />;
  }
  return (
    <div className='my-10'>
      <div className='custom-container'>
        <BookingHeading />
        <div className='mt-5'>
          <AllItems
            items={ITEMS1}
            title={randomDate(new Date(2020, 0, 1), new Date())}
          />
          <AllItems
            items={ITEMS2}
            title={randomDate(new Date(2020, 0, 1), new Date())}
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingBookingsContainer;
