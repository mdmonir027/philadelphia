import React, { useState } from 'react';
import { FaSyncAlt } from 'react-icons/fa';
import shortid from 'shortid';
import ApartmentCard from '../shared/ApartmentCard';
import TripHeading from '../shared/TripHeading';

const apartments = [
  {
    id: shortid(),
    image: 'https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg',
    title: 'House with Kazbegi landscapes',
    subTitle: 'Entire apartment at Philadelphia',
    price: 490,
    text: '8 nights',
    date: 'Sep 20 - Sep 27, 2020',
    utility: ['2 Guests', '1 bedroom', '2 beds', '2 baths'],
  },
  {
    id: shortid(),
    image: 'https://images.pexels.com/photos/2030037/pexels-photo-2030037.jpeg',
    title: 'Hideaway tent with pool and tub ',
    subTitle: 'Entire apartment at Philadelphia',
    price: 490,
    text: '8 nights',
    date: 'Aug 2 - Aug 7, 2020',
    utility: ['2 Guests', '1 bedroom', '2 beds', '2 baths'],
  },
  {
    id: shortid(),
    image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg',
    title: 'Unique glamping experience',
    subTitle: 'Entire apartment at Philadelphia',
    price: 490,
    text: '8 nights',
    date: 'Mar 8 - Mar 12, 2020',
    utility: ['2 Guests', '1 bedroom', '2 beds', '2 baths'],
  },
  {
    id: shortid(),
    image: 'https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg',
    title: 'Hideaway tent with pool and tub ',
    subTitle: 'Entire apartment at Philadelphia',
    price: 490,
    text: '8 nights',
    date: '10 Sep - 20 Sep, 2020',
    utility: ['2 Guests', '1 bedroom', '2 beds', '2 baths'],
  },
  {
    id: shortid(),
    image: 'https://images.pexels.com/photos/591471/pexels-photo-591471.jpeg',
    title: 'Casa del Árbol pinochueco Patagonia ',
    subTitle: 'Entire apartment at Philadelphia',
    price: 490,
    text: '8 nights',
    date: '10 Sep - 20 Sep, 2020',
    utility: ['2 Guests', '1 bedroom', '2 beds', '2 baths'],
  },
];

const UpcomingTripsContainer = () => {
  const [isTitle, setIsTitle] = useState(false);
  return (
    <div className='my-10'>
      <div className='custom-container'>
        <TripHeading
          isTitle={isTitle}
          setIsTitle={setIsTitle}
          text='Upcoming Trips'
        />
        <div className='mt-10 flex flex-wrap'>
          {apartments.map((item) => (
            <ApartmentCard
              key={item.id}
              isTitle={isTitle}
              image={item.image}
              title={item.title}
              subTitle={item.subTitle}
              utility={item.utility}
              price={item.price}
              text={item.text}
              date={item.date}
            />
          ))}
        </div>
        <p className='px-5 py-3 rounded-lg text-white font-bold bg-primary w-max text-center flex gap-3 items-center mt-8 hover:cursor-pointer'>
          <FaSyncAlt />
          <span>Load More</span>
        </p>
      </div>
    </div>
  );
};

export default UpcomingTripsContainer;
