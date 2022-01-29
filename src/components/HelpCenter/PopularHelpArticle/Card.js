import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Card = () => {
  return (
    <div className='md:px-2 mb-3 w-full md:w-5/12 lg: w:1/3 '>
      <div className='border px-7 py-8 rounded-lg'>
        <h2 className='text-black font-bold text-xl mb-3'>
          How do I cancel my reservation for a place to stay?
        </h2>
        <p className='text-gray-700 mb-3'>
          You can cancel a reservation any time before or during your trip.
        </p>
        <p className='text-primary flex items-center gap-2'>
          <span>
            <FaAngleRight />
          </span>
          <span>Read more</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
