import React, { useState } from 'react';
import { FaCalendarAlt, FaEllipsisH } from 'react-icons/fa';
import ItemInfoModal from '../ItemInfoModal';

const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};
const dateFormate = (date) => {
  return new Date(date).toLocaleDateString('en-US', options);
};
const Item = (props) => {
  const { dateFrom, dateTo, apartmentImage, title, paymentStatus, userImage } =
    props;

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className='flex  items-center gap-x-4 justify-between border-b pb-3 mb-4'>
        <div className='flex items-center gap-x-2 w-3/12'>
          <div className='bg-gray-100 text-sm  p-3 rounded-md text-gray-600 flex justify-center items-center hover:cursor-pointer'>
            <FaCalendarAlt />
          </div>

          <p className='text-primary-black'>
            <span className='font-bold mr-2'>{dateFormate(dateTo)}</span>
            <span className=''>{dateFormate(dateFrom)}</span>
          </p>
        </div>
        <div className='flex gap-4 items-center flex-1'>
          <div className='h-12 w-12 rounded-lg overflow-hidden'>
            <img
              src={apartmentImage}
              className='w-full h-full object-cover'
              alt=''
            />
          </div>
          <h2 className='text-lg font-medium text-primary-black'>{title}</h2>
        </div>
        <div className='flex items-center gap-2'>
          {paymentStatus === 0 ? (
            <p className='border px-6 rounded-md text-green-700 py-1 bg-gray-100'>
              Paid
            </p>
          ) : (
            <p className='border px-4 rounded-md bg-red-50 text-red-300 py-1'>
              Booked
            </p>
          )}

          <div className='h-12 w-12 rounded-lg overflow-hidden'>
            <img
              src={userImage}
              className='w-full h-full object-cover'
              alt=''
            />
          </div>
          <div
            className='bg-gray-100 text-sm  p-3 rounded-md text-gray-600 flex justify-center items-center hover:cursor-pointer'
            onClick={() => setIsOpen(true)}
          >
            <FaEllipsisH />
          </div>
        </div>
      </div>
      <ItemInfoModal
        open={isOpen}
        handleClose={handleClose}
        dateFrom={'Oct 29, 2020'}
        dateTo={' Oct 31,2020'}
        guestCount={2}
        payment={'Visa Card ****** 1456'}
        commentForOwner={'Stopping Video Autoplay on Lorr Chrome'}
        image='https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        title=' Charming and comfortable house'
        subTitle='Dare Underpass'
      />
    </>
  );
};

export default Item;
