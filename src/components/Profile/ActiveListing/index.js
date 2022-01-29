import React, { useState } from 'react';
import shortid from 'shortid';
import CardItem from './CardItem';

const ITEMS = [
  {
    id: shortid(),
    price: 35,
    rating: '4.91',
    title: 'Charming and comfortable house',
    utility: ['2 bed', '1 bedroom', '2 beds'],
    image:
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: shortid(),
    price: 42,
    rating: '4.88',
    title: 'House with Kazbegi landscapes',
    utility: ['2 bed', '1 bedroom', '2 beds'],
    image:
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: shortid(),
    price: 29,
    rating: '4.65',
    title: 'Hideaway tent with pool and tub',
    utility: ['2 bed', '1 bedroom', '2 beds'],
    image:
      'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: shortid(),
    price: 38,
    rating: '4.75',
    title: 'Unique glamping experience',
    utility: ['2 bed', '1 bedroom', '2 beds'],
    image:
      'https://images.pexels.com/photos/813692/pexels-photo-813692.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: shortid(),
    price: 38,
    rating: '4.75',
    title: 'Baumhaus hof Grove-Dittmer',
    utility: ['2 bed', '1 bedroom', '2 beds'],
    image:
      'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

const ActiveListing = () => {
  const [items] = useState(ITEMS);
  return (
    <div>
      <div className='md:flex flex-wrap gap-y-4'>
        {items.map((item) => (
          <div className='w-full md:w-1/2' key={item.id}>
            <CardItem
              price={item.price}
              rating={item.rating}
              title={item.title}
              utility={item.utility}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveListing;
