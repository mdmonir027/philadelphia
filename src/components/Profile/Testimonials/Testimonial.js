import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
  return (
    <div>
      <p className='font-bold text-primary-black mb-2 text-xl '>
        Hideaway tent with pool and tub
      </p>
      <p className='text-base text-gray-600 '>
        Testimonials or quotes from your customers are one of the most common
        forms of customer reviews. You're most likely to find them on a company
        website. When it comes to making decisions, we humans aren't always
        independent.
      </p>
      <div className='flex justify-between mt-10'>
        <div className='flex gap-2'>
          <div className='w-14 h-14 rounded-md overflow-hidden'>
            <img
              src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
              alt=''
              className='w-full h-full object-cover'
            />
          </div>
          <div>
            <p className='font-bold text-xl text-primary-black'>Joana Leite</p>
            <p className=' text-sm text-gray-600'>Jun 03-10, 2020</p>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <FaStar className='text-primary text-lg' />
          <p className='text-2xl  font-bold text-primary-black'>4.96</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
