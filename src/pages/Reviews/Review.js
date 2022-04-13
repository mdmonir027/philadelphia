import React from 'react';
import { FaEllipsisH, FaStar } from 'react-icons/fa';

const Review = (props) => {
  const { title, feedback, username, user_avatar, rating, createdAt } = props;
  return (
    <div className='w-full mb-6'>
      <div className='border rounded-lg'>
        <div className='mb-2 p-6'>
          <div className='flex justify-between items-center'>
            <h2 className='font-medium mb-1 text-xl'>{title}</h2>
            <FaEllipsisH className='hover:cursor-pointer text-gray-500 hover:text-gray-700' />
          </div>
          <p className=' text-gary-500 text-sm'>{feedback}</p>
        </div>

        <div className='bg-gray-200 px-6 py-3'>
          <div className='flex justify-between items-center '>
            <div className='flex gap-2 items-center'>
              <div className='w-14 h-14 rounded overflow-hidden'>
                <img
                  src={user_avatar}
                  alt='img'
                  className='w-full h-full object-cover'
                />
              </div>
              <div>
                <h4 className='text-gary-900  font-medium'>{username}</h4>
                <p className='text-gray-600 font-sm'>
                  {new Date(createdAt).toLocaleDateString(undefined, {
                    month: 'short',
                    year: 'numeric',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
            <div className='flex gap-2 items-center '>
              <FaStar className='text-primary text-lg' />
              <p className='text-lg font-bold'>{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
