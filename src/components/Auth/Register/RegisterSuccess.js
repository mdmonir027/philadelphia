import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useInnerSize } from '../../../hook/useInnerSize';

const RegisterSuccess = ({ handleClose, email }) => {
  const { width } = useInnerSize();
  const navigate = useNavigate();
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
          <div className='w-28 h-28 rounded-full flex justify-center items-center mx-auto bg-gray-200 text-4xl text-green-600 mb-4'>
            <FaCheck />
          </div>
          <div className='w-10/12 mx-auto text-center '>
            <h2 className='text-3xl text-black font-medium mb-2'>Thank you!</h2>
            <p className='text-sm text-gray-800'>
              We sent an email to {email} <br />
              Click confirmation link in the email to verify your account
            </p>
          </div>
          <div className='mt-5'>
            <button
              onClick={() => navigate('/')}
              className='w-full text-lg font-medium py-3 rounded-lg bg-primary text-white'
            >
              Open Email App {'&'} confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccess;
