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
    </div>
  );
};

export default Discount;
