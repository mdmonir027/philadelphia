import React from 'react';
import { FaListUl, FaTh } from 'react-icons/fa';

const TripHeading = ({ setIsTitle, isTitle }) => {
  return (
    <div className='flex justify-between items-center'>
      <h2 className='text-2xl font-bold text-primary-black'>Your Trips</h2>
      <div className='flex gap-x-4 items-center'>
        <ul className='flex gap-x-2 items-center'>
          <li className='px-4 py-2 rounded-lg text-sm bg-gray-100 text-gray-600 cursor-pointer'>
            Upcoming
          </li>
          <li className='px-4 py-2 rounded-lg text-sm  text-gray-600 cursor-pointer'>
            Past
          </li>
          <li className='px-4 py-2 rounded-lg text-sm text-gray-600 cursor-pointer'>
            Saved
          </li>
        </ul>
        <div onClick={() => setIsTitle((p) => !p)}>
          {isTitle ? (
            <FaListUl className='text-gray-600 cursor-pointer' />
          ) : (
            <FaTh className='text-gray-600 cursor-pointer' />
          )}
        </div>
      </div>
    </div>
  );
};

export default TripHeading;
