import React from 'react';
import shortid from 'shortid';
import ApartmentPagination from '../Pagination/ApartmentPagination';
import CardItem from './CardItem';

const apartments = [
  {
    id: shortid(),
    title: 'House with Kazbegi landscapes ',
    text: 'Entire apartment at Philadelphia',
    rating: 'Excellent',
    price: '$35',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    type: 1,
  },
  {
    id: shortid(),
    title: 'Charming and comfortable house',
    text: 'Entire apartment at Philadelphia',
    rating: 'Excellent',
    price: '$35',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    type: 1,
  },
  {
    id: shortid(),
    title: 'House with Kazbegi landscapes ',
    text: 'Entire apartment at Philadelphia',
    rating: 'Good',
    price: '$42',
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
    type: 2,
  },
  {
    id: shortid(),
    title: 'Baumhaus hof Grove-Dittmer',
    text: 'Private room at Philadelphia',
    rating: 'Good',
    price: '$29',
    image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg',
    type: 2,
  },
  {
    id: shortid(),
    title: 'Hideaway tent with pool and tub',
    text: 'Private room at Philadelphia',
    rating: 'Excellent',
    price: '$38',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
    type: 1,
  },
  {
    id: shortid(),
    title: 'Casa del Árbol pinochueco',
    text: 'Entire apartment at Philadelphia',
    rating: 'Regular',
    price: '$35',
    image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
    type: 3,
  },
  {
    id: shortid(),
    title: 'Unique glamping experience',
    text: 'Entire apartment at Philadelphia',
    rating: 'Good',
    price: '$38',
    image: 'https://images.pexels.com/photos/813692/pexels-photo-813692.jpeg',
    type: 2,
  },
  {
    id: shortid(),
    title: 'Tiny house at Gora Gut',
    text: 'Private room at Philadelphia',
    rating: 'Excellent',
    price: '$29',
    image: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg',
    type: 1,
  },
  {
    id: shortid(),
    title: 'Tiny house at Gora Gut',
    text: 'Private room at Philadelphia',
    rating: 'Excellent',
    price: '$29',
    image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg',
    type: 1,
  },
];

const Apartments = () => {
  return (
    <div>
      <div className=''>
        {apartments.map((apartment) => (
          <CardItem
            key={apartment.id}
            title={apartment.title}
            text={apartment.text}
            rating={apartment.rating}
            price={apartment.price}
            image={apartment.image}
            type={apartment.type}
          />
        ))}
      </div>
      <ApartmentPagination />
    </div>
  );
};

export default Apartments;
