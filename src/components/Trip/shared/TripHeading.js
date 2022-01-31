import React from 'react';
import { FaListUl, FaTh } from 'react-icons/fa';

const TripHeading = ({ setIsTitle, isTitle, text }) => {
  return (
    <div className='flex flex-col md:flex-row gap-4 mg:gap-0 justify-between items-center text-center'>
      <h2 className='text-2xl font-bold text-primary-black'>{text}</h2>
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
        <div
          onClick={() => setIsTitle((p) => !p)}
          className='text-gray-600 cursor-pointer'
        >
          {isTitle ? <FaTh /> : <FaListUl />}
        </div>
      </div>
    </div>
  );
};

export default TripHeading;
