import React, { useState } from 'react';
import { FaEllipsisH, FaEnvelope, FaStar, FaTimes } from 'react-icons/fa';
const Review = (props) => {
  const { title, feedback, username, user_avatar, rating, createdAt } = props;

  const [show, setShow] = useState(false);

  return (
    <>
      <div className='w-full mb-6'>
        <div className='border rounded-lg'>
          <div className='mb-2 p-6'>
            <div className='flex justify-between items-center'>
              <h2 className='font-medium mb-1 text-xl'>{title}</h2>
              <FaEllipsisH
                className='hover:cursor-pointer text-gray-500 hover:text-gray-700'
                onClick={() => setShow((prev) => !prev)}
              />
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
      {show && <PopupModal {...props} setShow={setShow} />}
    </>
  );
};

const PopupModal = (props) => {
  const { title, feedback, username, user_avatar, rating, createdAt } = props;
  const { setShow } = props;
  return (
    <>
      <div className='w-1/2 border rounded-md'>
        <div className='flex justify-between items-center p-4'>
          <div></div>
          <h2 className='text-lg text-black font-medium'>
            Reply to the review
          </h2>
          <FaTimes
            className='text-sm font-thin cursor-pointer'
            onClick={() => setShow((prev) => !prev)}
          />
        </div>
        <hr />
        <div className='p-4'>
          <div className='flex border rounded overflow-hidden h-20 '>
            <div className='w-24 overflow-hidden'>
              <img
                src='https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
                className='w-full h-full object-cover'
              />
            </div>
            <div className='pl-4 flex items-center'>
              <div>
                <h2 className='font-medium text-lg text-primary-black'>
                  Charming and comfortable house
                </h2>
                <p className='text-sm text-primary-black'>
                  292 Aliza Ridge, West Elvie, DC 20120
                </p>
              </div>
            </div>
          </div>
          <p className='mt-4 mb-2 text-primary-black text-sm'>{feedback}</p>
          <div className='py-3'>
            <div className='flex justify-between items-center '>
              <div className='flex gap-2 items-center'>
                <div className='aspect-square w-12 rounded overflow-hidden'>
                  <img
                    src={user_avatar}
                    alt='img'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div>
                  <h4 className='text-gary-900  font-medium text-base'>
                    {username}
                  </h4>
                  <p className='text-gray-600 font-sm'>
                    {new Date(createdAt).toLocaleDateString(undefined, {
                      month: 'short',
                      year: 'numeric',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
              <div className='flex gap-1 items-center '>
                <FaStar className='text-primary text-xs' />
                <p className='text-base font-bold'>{rating}</p>
              </div>
            </div>
          </div>
          <hr className='my-5' />
          <h2 className='mt-1 text-primary-black text-lg font-medium'>
            Add you reply
          </h2>
          <div className='flex border px-2 py-5 mt-3 rounded-md items-center'>
            <div className='flex-1 pl-3'>
              <input
                type='text'
                className='border-none block outline-none w-full placeholder:text-primary-black text-sm'
                placeholder='Type you message'
              />
            </div>
            <FaEnvelope className='text-primary-black mx-2' />
          </div>
          <button className='block w-full text-white bg-[#00d388] py-3 mt-4 rounded-md'>
            Send message
          </button>
        </div>
      </div>
    </>
  );
};

export default Review;
