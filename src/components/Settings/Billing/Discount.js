import React from 'react';
import Title from '../shared/Title';
import CouponList from './CouponList';
import Form from './Form';

const Discount = () => {
  return (
    <div className='mt-10'>
      <Title text={'Discount Code'} />
      <Form />
      <CouponList />
      <div className='flex gap-x-4 mt-8'>
        <button className='bg-primary text-white px-6 py-3 rounded-lg'>
          Update Setting
        </button>
        <button className='bg-gray-200 px-6 py-3 rounded-lg'>Cancel</button>
      </div>
    </div>
  );
};

export default Discount;
