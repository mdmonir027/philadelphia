import React from 'react';
import { FaBan, FaLink } from 'react-icons/fa';

const Item = ({ fieldName, status }) => (
  <div className='flex gap-x-4 items-center pt-3 pb-4 border-b mb-2'>
    <div className='flex-1'>
      <p className='font-normal text-sm text-gray-900'>{fieldName}</p>
      <div className='flex justify-between'>
        <h2 className='text-gray-900 font-semibold text-lg'>
          {status ? '' : 'Not'} Connected
        </h2>
        <div className='flex items-center gap-x-2 text-sm text-gray-600 font-medium cursor-pointer'>
          {status ? (
            <>
              <FaBan />
              <p>Remove</p>
            </>
          ) : (
            <>
              <FaLink />
              <p>Connect</p>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Item;
