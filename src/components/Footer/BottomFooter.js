import React from 'react';

const BottomFooter = () => {
  return (
    <div className=' bg-white py-4'>
      <div className='custom-container '>
        <div className='flex flex-col items-center md:flex-row gap-5 text-center justify-between'>
          <div className='flex gap-3'>
            <p className='text-gray-500 cursor-pointer'>2020 All Reserved</p>
            <a href='/'>Privacy Policy</a>
            <a href='/'>Term of Use</a>
          </div>
          <div className='flex gap-2'>
            <p className='bg-gray-300 px-3 py-1 rounded-md'>English</p>
            <p className='bg-gray-300 px-3 py-1 rounded-md'>...USD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
