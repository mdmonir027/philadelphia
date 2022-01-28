import React from 'react';
import { FaCommentAlt, FaFlag } from 'react-icons/fa';
const HotelRoom = ({ img, subTitle, title, utility, price, period }) => {
  return (
    <>
      <div className='border flex rounded-lg overflow-hidden gap-3 mb-6'>
        <div className='w-3/12 overflow-hidden'>
          <img src={img} alt={title} className='w-full h-full object-cover' />
        </div>
        <div className='py-4 pl-5 flex flex-col justify-between flex-1'>
          <p className='text-gray-500 font-normal text-base'>{subTitle}</p>
          <div>
            <h3 className='text-bold text-primary-black text-xl font-semibold'>
              {title}
            </h3>
            <ul className='flex gap-5 '>
              {utility.map((item) => (
                <li key={Math.random()} className='text-gray-500 '>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className='text-gray-500'>
            <span className=' font-bold text-black'>{price}</span> / total of{' '}
            {period}
          </p>
        </div>
        <div className='w-4/12 flex gap-3 mr-2 justify-end items-center'>
          <div className='flex gap-2 bg-[#f7f7f7] px-4 text-custom-gray py-2 items-center rounded-lg cursor-pointer'>
            <p>
              <FaCommentAlt />
            </p>
            <p>Contact Host</p>
          </div>
          <div className='flex gap-2 bg-[#f7f7f7] px-4 text-custom-gray py-2 items-center rounded-lg cursor-pointer'>
            <p>
              <FaFlag />
            </p>
            <p>Report Host</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelRoom;
