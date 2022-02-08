import React, { useState } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import ItemInfoModal from './ItemInfoModal';
const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const dateFormate = (date) => {
  return new Date(date).toLocaleDateString('en-US', options);
};
const Item = (props) => {
  const {
    dateFrom,
    dateTo,
    image,
    title,
    status,
    subTitle,
    utility,
    price,
    text,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div
        className='w-full mb-4 border rounded overflow-hidden hover:cursor-pointer hidden md:flex'
        onClick={() => setIsOpen(true)}
      >
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
          {status === 1 && (
            <p className='bg-gray-100 text-green-400 px-5 py-2 rounded-md w-32 text-center'>
              Active
            </p>
          )}
          {status === 0 && (
            <p className='bg-gray-100 text-gray-700 px-5 py-2 rounded-md w-32 text-center'>
              Ended
            </p>
          )}
          {status === -1 && (
            <p className='bg-red-100 text-red-700 px-5 py-2 rounded-md w-32 text-center'>
              Canceled
            </p>
          )}

          <p className='text-gray-700 font-light text-sm'>
            {dateFormate(dateFrom)} - {dateFormate(dateTo)}
          </p>
        </div>
      </div>
      <div className='md:hidden'>
        <div
          className='w-full md:w-1/2 lg:w-1/3 hover:cursor-pointer'
          onClick={() => setIsOpen(true)}
        >
          <div className='border rounded overflow-hidden mb-4 mx-2'>
            <div className='h-48 overflow-hidden'>
              <img src={image} alt='' className='h-full w-full object-cover' />
            </div>
            <div className='p-5'>
              <p className='text-gray-800 text-base mb-2 mt-1'>{subTitle}</p>
              <h2 className='text-xl font-bold text-gray-900 mb-1'>{title}</h2>
              <p className='text-gray-700 font-light text-sm'>
                {dateFormate(dateFrom)} - {dateFormate(dateTo)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ItemInfoModal
        open={isOpen}
        handleClose={handleClose}
        dateFrom={dateFormate(dateFrom)}
        dateTo={dateFormate(dateTo)}
        guestCount={2}
        payment={'Visa Card ****** 1456'}
        commentForOwner={'Stopping Video Autoplay on Lorr Chrome'}
        image={image}
        title={title}
        address='Dare Underpass'
      />
    </>
  );
};

export default Item;
