import React from 'react';
import { FaEllipsisH } from 'react-icons/fa';

const ApartmentCard = ({
  isTitle,
  image,
  title,
  subTitle,
  utility,
  price,
  text,
  date,
}) => {
  if (isTitle) {
    return (
      <div className='w-full flex mb-4 border rounded overflow-hidden hover:cursor-pointer'>
        <div className='h-52 w-4/12 overflow-hidden'>
          <img src={image} alt='' className='h-full w-full object-cover' />
        </div>
        <div className='px-5 py-7 w-6/12 flex flex-col justify-between'>
          <p className='text-gray-800 text-base '>{subTitle}</p>
          <div>
            <h2 className='text-xl font-bold text-gray-900'>{title}</h2>
            <ul className='flex gap-2'>
              {utility.map((item) => (
                <li key={Math.random()}>{item}</li>
              ))}
            </ul>
          </div>

          <p className='text-gray-700 font-light text-sm'>
            <b>
              {'$'}
              {price}
            </b>
            / total for {text}
          </p>
        </div>
        <div className='flex flex-col justify-between items-end w-2/12 pr-3 py-7'>
          <FaEllipsisH />
          <p className='bg-gray-100 px-5 py-2 rounded-md w-32 text-center text-gray-700'>
            Tag
          </p>
          <p className='text-gray-700 font-light text-sm'>{date}</p>
        </div>
      </div>
    );
  }
  return (
    <div className='w-1/3 hover:cursor-pointer'>
      <div className='border rounded overflow-hidden mb-4 mx-2'>
        <div className='h-48 overflow-hidden'>
          <img src={image} alt='' className='h-full w-full object-cover' />
        </div>
        <div className='p-5'>
          <p className='text-gray-800 text-base mb-2 mt-1'>{subTitle}</p>
          <h2 className='text-xl font-bold text-gray-900 mb-1'>{title}</h2>
          <p className='text-gray-700 font-light text-sm'>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
