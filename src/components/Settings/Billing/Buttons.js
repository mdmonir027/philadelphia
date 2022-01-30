import React from 'react';

const Buttons = () => {
  return (
    <>
      <div className='flex gap-x-4 mt-8'>
        <button className='bg-primary text-white px-6 py-3 rounded-lg'>
          Update Setting
        </button>
        <button className='bg-gray-200 px-6 py-3 rounded-lg'>Cancel</button>
      </div>
    </>
  );
};

export default Buttons;
