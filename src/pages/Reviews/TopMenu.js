import React from 'react';

const TopMenu = () => {
  return (
    <div className='flex justify-between mb-4'>
      <h2 className='font-medium text-gray-900 text-2xl'>Latest Reviews</h2>
      <div>
        <ul className='flex gap-4'>
          <li className='hover:border hover:cursor-pointer  px-5 py-2 text-sm rounded-md'>
            Positive
          </li>
          <li className='hover:border hover:cursor-pointer px-5 py-2 text-sm rounded-md'>
            Neutral
          </li>
          <li className='hover:border hover:cursor-pointer px-5 py-2 text-sm rounded-md'>
            Negative
          </li>
          <li className='border hover:cursor-pointer font-medium  px-5 py-2 text-sm rounded-md'>
            All
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopMenu;
