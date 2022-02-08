import React, { useState } from 'react';
import {
  FaSearch,
  FaSortAmountDownAlt,
  FaSortAmountUpAlt,
} from 'react-icons/fa';

const BookingHeading = () => {
  const [search, setSearch] = useState('');
  const [isAscending, setIsAscending] = useState(true);
  return (
    <div className='flex gap-4 mg:gap-0 justify-between items-center text-center'>
      <div className='md:hidden'></div>
      <h2 className='text-2xl font-bold text-primary-black'>Your listings</h2>
      <div className='flex gap-x-4 items-center'>
        <div className='flex gap-x-2 items-center cursor-pointer w-44 text-gray-600'>
          <div className='flex justify-center items-center '>
            <FaSearch />
          </div>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Type to search...'
            className='w-full bg-transparent outline-none '
          />
        </div>
        <div
          className='flex gap-x-2 items-center cursor-pointer text-gray-600'
          onClick={() => setIsAscending((prev) => !prev)}
        >
          <div>
            {isAscending ? <FaSortAmountDownAlt /> : <FaSortAmountUpAlt />}
          </div>
          <p>Short by date</p>
        </div>
      </div>
    </div>
  );
};

export default BookingHeading;
