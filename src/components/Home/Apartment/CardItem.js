import React from 'react';
import { FaStar } from 'react-icons/fa';

const CardItem = ({ image, title, text, rating, type, price }) => {
  const getRatingStarClass = () => {
    if (type === 1) return 'bg-green-400 text-[#f6ffff]';
    if (type === 2) return 'bg-rose-200 text-red-400';
    if (type === 3) return 'bg-orange-300 text-[#f6ffff]';
    return '';
  };
  return (
    <div className='mb-2 border border-gray-200 rounded-md px-3 py-2 flex gap-3'>
      <div className='w-24 rounded overflow-hidden h-auto'>
        <img
          src={image}
          alt=''
          className='w-full h-full object-cover object-center'
        />
      </div>
      <div className='flex-1'>
        <h1 className='font-medium text-xl opacity-90'>{title}</h1>
        <p className='text-sm opacity-80'>{text}</p>
        <div className='flex  justify-between mt-3'>
          <div className='flex gap-1 items-center'>
            <p className={`p-1 rounded ${getRatingStarClass()}`}>
              <FaStar />
            </p>
            <p>{rating}</p>
          </div>
          <p>
            from <b>{price}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
