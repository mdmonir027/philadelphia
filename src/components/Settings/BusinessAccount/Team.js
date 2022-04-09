import React from 'react';
import { FaEllipsisH, FaUserAlt } from 'react-icons/fa';

const Team = () => {
  return (
    <div className='mt-4'>
      <h2 className='text-black font-bold text-2xl'>Team</h2>
      <div className='mt-3'>
        <Member />
      </div>

      <Invite />
    </div>
  );
};

const Member = () => {
  return (
    <div className='flex justify-between items-center shadow-md p-2 rounded my-3'>
      <div className='flex gap-5 items-center'>
        <div className='w-16 h-16 rounded-md overflow-hidden'>
          <img
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <h2 className='text-xl font-semibold text-gray-800'>
            Marvin Lamber{' '}
          </h2>
          <p className=' text-gray-500 font-bold'>mar.lambert@gmail.com</p>
        </div>
      </div>
      <div className='text-gray-700 text-sm cursor-pointer'>
        <FaEllipsisH />
      </div>
    </div>
  );
};

const Invite = () => {
  return (
    <div className='mt-10'>
      <div className='px-4 py-4 rounded-lg border mb-6'>
        <div className='flex items-center'>
          <input
            type='text'
            className='w-full pr-2 py-1 outline-none flex-1 text-gray-600'
            name=''
            id=''
            placeholder='Type email to invite team member'
          />
          <FaUserAlt className='text-gray-600' />
        </div>
      </div>
    </div>
  );
};

export default Team;
