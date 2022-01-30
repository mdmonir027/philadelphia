import React from 'react';
import shortid from 'shortid';

const TogglerItem = ({ checked, getValue, field, value }) => {
  const id = shortid();
  return (
    <div className=' mt-8 pb-3 border-b'>
      <p className='font-normal text-sm text-gray-900'>{field}</p>

      <div className='flex justify-between'>
        <h2 className='text-gray-800 font-semibold text-lg'>{value}</h2>
        <div className='flex items-center gap-x-1 text-sm text-gray-600 cursor-pointer'>
          {/* start */}
          <label
            htmlFor={id}
            className='flex items-center cursor-pointer relative mb-4'
          >
            <input
              type='checkbox'
              id={id}
              className='sr-only toggleInput'
              checked={checked}
              onChange={() => getValue()}
            />
            <div className='toggle-bg bg-gray-200 border-2 border-gray-200  h-6 w-11 rounded-full'></div>
          </label>
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default TogglerItem;
