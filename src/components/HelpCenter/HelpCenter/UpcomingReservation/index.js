import React from 'react';
import shortid from 'shortid';
import Heading from '../shared/Heading';
import HotelRoom from './HotelRoom';

const items = [
  {
    id: shortid(),
    img: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
    subTitle: ' Entire apartment at Philadelphia',
    title: 'Charming and comfortable house',
    utility: ['2 guests', '1 bedroom', '2 beds', '2 baths'],
    price: '$335',
    period: '8 nights',
  },
];

const UpcomingReservation = () => {
  return (
    <div className='py-10'>
      <div className='custom-container'>
        <Heading text='Upcoming Reservation' />
        <div>
          {items.map((item) => (
            <HotelRoom
              key={Math.random()}
              img={item.img}
              subTitle={item.subTitle}
              title={item.title}
              utility={item.utility}
              price={item.price}
              period={item.period}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingReservation;
