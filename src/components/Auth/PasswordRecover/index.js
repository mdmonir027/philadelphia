import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaTimes } from 'react-icons/fa';
import { useInnerSize } from '../../../hook/useInnerSize';

const PasswordRecover = ({ handleClose }) => {
  const { width } = useInnerSize();
  const [email, setEmail] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ email });
  };
  return (
    <div>
      <div className='my-4'>
        <div className='py-2  px-5 pb-6 border-b-2 relative text-black flex justify-between items-center'>
          <div></div>
          <h2 className='text-center text-3xl font-medium'>Sign Up</h2>
          {width > 768 ? (
            <FaTimes
              className='text-2xl font-light text-primary-black  cursor-pointer'
              onClick={handleClose}
            />
          ) : (
            <div />
          )}
        </div>
        <div className='w-11/12 mx-auto  mt-8 '>
          <div className='w-28 h-28 rounded-full flex justify-center items-center mx-auto bg-gray-200 text-4xl text-red-500 mb-4'>
            <FaLock />
          </div>
          <div className='w-12/12 mx-auto text-center '>
            <h2 className='text-2xl text-black font-medium mb-2'>
              Lost your Password? <br />
              Enter your details to recover
            </h2>
            <p className='text-sm text-gray-800'>
              Enter your details to process further
            </p>
          </div>
          <form className='my-7' onSubmit={submitHandler}>
            <div className='pb-2 mb-2 border px-4 py-3 rounded'>
              <p className='font-normal text-xs text-gray-900 '>Email</p>

              <div className='flex justify-between items-center text-lg'>
                <input
                  type='email'
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className='w-full pr-2 py-1 outline-none font-medium '
                />
                <div className='flex items-center gap-x-1 text-sm text-black cursor-pointer'>
                  <FaEnvelope />
                </div>
              </div>
            </div>

            <div className='mt-5'>
              <button
                type='submit'
                className='w-full text-lg font-medium py-3 rounded-lg bg-primary text-white'
              >
                Recover
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecover;
