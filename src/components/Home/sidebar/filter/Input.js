import React from 'react';

const Input = () => {
  return (
    <div className='w-full mb-7'>
      <input
        type='text'
        className='bg-gray-100 w-full outline-none border-none py-2 px-3 rounded-md text-gray-700'
        placeholder='Filter by'
      />
    </div>
  );
};

export default Input;
