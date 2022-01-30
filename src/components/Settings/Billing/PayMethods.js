import React from 'react';
import { FaBan } from 'react-icons/fa';
import Title from '../shared/Title';

const PayMethods = () => {
  return (
    <div className='w-full mt-10 '>
      <Title text={'Payouts Methods'} />
      <div>
        <Item
          image={
            'https://e7.pngegg.com/pngimages/910/492/png-clipart-mastercard-logo-credit-card-visa-brand-mastercard-text-label-thumbnail.png'
          }
          name={'Master Card ....332332'}
          exp={'04/2021'}
        />
        <Item
          image={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png'
          }
          name={' Visa ....332332'}
          exp={'08/2021'}
        />
      </div>
    </div>
  );
};

const Item = ({ image, name, exp }) => (
  <div className='flex gap-x-4 items-center pt-3 pb-4 border-b mb-2'>
    <div className='w-16 h-14 flex justify-center items-center border px-2 rounded-md'>
      <img src={image} alt='' />
    </div>
    <div className='flex-1'>
      <h2 className='text-gray-900 font-semibold text-lg'>{name}</h2>
      <div className='flex justify-between'>
        <p className='font-normal text-sm text-gray-900'>Expiration: {exp}</p>
        <div className='flex items-center gap-x-1 text-sm text-gray-800 cursor-pointer'>
          <FaBan />
          <p>Remove</p>
        </div>
      </div>
    </div>
  </div>
);

export default PayMethods;
