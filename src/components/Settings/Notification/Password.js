import React from 'react';
import { FaCheckCircle, FaLock } from 'react-icons/fa';
import Title from '../shared/Title';

const Password = () => {
  return (
    <div className=''>
      <Title text={'Change Password'} />
      <div className='px-4 py-3 rounded-lg border mb-6'>
        <p className='font-normal text-gray-900'>Current Password</p>
        <div className='flex'>
          <input
            type='password'
            className='w-full pr-2 py-1 outline-none flex-1'
            name=''
            id=''
            placeholder='*************'
          />
          <FaLock className='text-gray-900' />
        </div>
      </div>
      <div className='px-4 py-3 rounded-lg border'>
        <p className='font-normal text-gray-900'>New Password</p>
        <div className='flex'>
          <input
            type='password'
            className='w-full pr-2 py-1 outline-none flex-1'
            name=''
            id=''
            placeholder='*************'
          />
          <FaCheckCircle className='text-gray-500' />
        </div>
      </div>
    </div>
  );
};

export default Password;
