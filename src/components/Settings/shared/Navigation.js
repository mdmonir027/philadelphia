import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigation = ({ url, title, subTitle }) => {
  return (
    <div className='flex items-center p-1 gap-x-3'>
      <Link
        to={url}
        className='inline-block p-4 bg-gray-100 rounded-lg text-lg text-gray-500'
      >
        <FaAngleLeft />
      </Link>
      <div>
        <p className='text-xl font-medium'>{title}</p>
        <p className='text-base font-normal text-primary-black'>{subTitle}</p>
      </div>
    </div>
  );
};

export default Navigation;
