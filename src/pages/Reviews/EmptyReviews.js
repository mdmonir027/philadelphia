import React from 'react';
import { Link } from 'react-router-dom';

const EmptyItems = () => {
  return (
    <div className='flex justify-center items-center my-10 text-center'>
      <div className='w-5/12 h-max py-10'>
        <div className='h-[20rem] w-[25rem] overflow-hidden mx-auto'>
          <img
            src='https://storytale-public2.b-cdn.net/2021/08/16/a8425a15-35ec-4d49-bbdf-5ef878f5244f-Houses.png'
            alt=''
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <h2 className='text-4xl font-extrabold text-primary-black mb-3'>
            No Reviews Found?
          </h2>
          <p className='text-sm font-light text-black'>
            Create new listing and add details about your location. <br /> You
            will get notified once it will be booked
          </p>
          <Link
            to={'/'}
            className='mt-8 bg-[#5BC386] inline-block py-3 px-10  text-white rounded-xl'
          >
            Add New listings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyItems;
