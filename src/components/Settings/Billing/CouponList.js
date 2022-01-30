import React from 'react';
import Title from '../shared/Title';

const CouponList = () => {
  return (
    <div className='w-full mt-10 '>
      <Title text={'Payouts Methods'} />
      <div>
        <Item name={'HCP-HMRMQ5PEFJ15%'} status={'Expired'} price={47.56} />
      </div>
    </div>
  );
};

const Item = ({ name, status, price }) => (
  <div className='flex gap-x-4 justify-between pt-3 pb-4 border-b mb-2'>
    <div>
      <h2 className='text-gray-900 font-semibold text-base'>{name}</h2>
      <p className='font-normal text-sm text-gray-900'>{status}</p>
    </div>
    <div>
      <p className='text-gray-900 font-bold text-lg'>
        {'$'}
        {price}off
      </p>
    </div>
  </div>
);

export default CouponList;
