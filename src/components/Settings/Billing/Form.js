import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const Form = () => {
  const [coupon, setCoupon] = useState('');
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(coupon);
  };
  return (
    <form
      className='flex items-center py-5 px-6 rounded-md border w-full'
      onSubmit={onSubmitHandler}
    >
      <div className='flex-1'>
        <input
          type='text'
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className='w-full outline-none'
        />
      </div>
      <button
        type='submit'
        className='text-primary cursor-pointer flex gap-x-2 pl-4 items-center'
      >
        <FaCheck />
        <p>Apply</p>
      </button>
    </form>
  );
};

export default Form;
