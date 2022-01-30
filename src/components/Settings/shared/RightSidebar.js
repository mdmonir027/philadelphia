import React from 'react';
import Title from './Title';

const RightSidebar = ({ Icon, title, text }) => {
  return (
    <div className='w-full shadow-md px-8 rounded py-7'>
      <div className='bg-gray-100 flex justify-center w-16 h-14 text-3xl items-center p-3 rounded-md mb-3 text-gray-400 icon transition-colors duration-300'>
        <Icon />
      </div>
      <Title text={title} />
      <p className='text-gray-800'>{text}</p>
    </div>
  );
};

export default RightSidebar;
