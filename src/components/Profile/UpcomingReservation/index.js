import React, { useState } from 'react';
import shortid from 'shortid';

const ITEMS = [
  {
    id: shortid(),
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
    dateFrom: '10 Sep',
    dateTo: '20 Sep, 2020',
    title: 'Hideaway tent with pool and tub',
  },
  {
    id: shortid(),
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    dateFrom: '10 Sep',
    dateTo: '20 Sep, 2020',
    title: 'Unique glamping experience',
  },
  {
    id: shortid(),
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    dateFrom: '10 Sep',
    dateTo: '20 Sep, 2020',
    title: 'Baumhaus hof Grove-Dittmer',
  },
];

const UpcomingReservation = () => {
  const [items] = useState(ITEMS);
  return (
    <div className='border px-4 py-4 rounded'>
      <h2 className='text-primary-black font-semibold text-xl mb-6 mt-2'>
        Upcoming Reservations
      </h2>
      <div>
        {items.map((item) => (
          <SingleItem
            key={item.id}
            image={item.image}
            dateFrom={item.dateFrom}
            dateTo={item.dateTo}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

const SingleItem = ({ image, dateFrom, dateTo, title }) => (
  <div className='flex gap-2 items-center mb-4'>
    <div className='w-16 h-16 rounded-md overflow-hidden'>
      <img src={image} alt='' className='w-full h-full object-cover' />
    </div>
    <div>
      <h2 className='font-semibold text-primary-black'>{title}</h2>
      <p className='text-gray-600 mt-2'>
        {dateFrom} - {dateTo}
      </p>
    </div>
  </div>
);

export default UpcomingReservation;
