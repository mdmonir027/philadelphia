import React from 'react';
import { FaAngleLeft, FaEllipsisH } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopNavigation = ({ url, title, subTitle }) => {
  return (
    <div className='flex items-center p-1 gap-x-3'>
      <Link
        to={url}
        className='inline-block p-4 bg-gray-100 rounded-lg text-lg text-gray-500'
      >
        <FaAngleLeft />
      </Link>
      <div className='flex-1'>
        <div className='flex justify-between flex-wrap'>
          <p className='text-lg md:text-xl font-medium'>{title}</p>
          <FaEllipsisH className='text-primary-black' />
        </div>
        <p className='text-base font-normal text-primary-black'>{subTitle}</p>
      </div>
    </div>
  );
};

export default TopNavigation;
