import React from 'react';
import { FaBan } from 'react-icons/fa';

const Item = ({ fieldName, value, Icon, isCurrent }) => (
  <div className='flex gap-x-4 items-center pt-3 pb-4 border-b mb-2'>
    <div className='w-16 h-14 flex justify-center items-center border px-2 text-2xl rounded-md'>
      <Icon />
    </div>
    <div className='flex-1'>
      {isCurrent ? (
        <div className='flex justify-between text-sm text-green-600 font-medium mb-1'>
          <p className='font-normal text-sm text-gray-900'>{fieldName}</p>

          <p>Current Session</p>
        </div>
      ) : (
        <p className='font-normal text-sm text-gray-900'>{fieldName}</p>
      )}

      <div className='flex justify-between'>
        <h2 className='text-gray-900 font-semibold text-lg'>{value}</h2>
        <div className='flex items-center gap-x-1 text-sm text-gray-800 cursor-pointer'>
          <FaBan />
          <p>Remove Device</p>
        </div>
      </div>
    </div>
  </div>
);

export default Item;
