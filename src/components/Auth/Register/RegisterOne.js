import React from 'react';
import {
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaTimes,
  FaTwitter,
} from 'react-icons/fa';

const RegisterOne = ({
  setType,
  handleClose,
  setSignUpmEmail,
  signUpmEmail,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setType('register-2');
  };
  return (
    <div>
      <div className='my-4'>
        <div className='py-2  px-5 pb-6 border-b-2 relative text-black flex justify-between items-center'>
          <div></div>
          <h2 className='text-center text-3xl font-medium'>Sign Up</h2>
          <FaTimes
            className='text-2xl font-light text-primary-black  cursor-pointer'
            onClick={handleClose}
          />
        </div>
        <div className='w-11/12 mx-auto  mt-8 '>
          <form className='mb-5' onSubmit={submitHandler}>
            <div className='pb-2 mb-2 border px-4 py-3 rounded'>
              <p className='font-normal text-xs text-gray-900 '>Email</p>

              <div className='flex justify-between items-center text-lg'>
                <input
                  type='email'
                  placeholder='Email'
                  onChange={(e) => setSignUpmEmail(e.target.value)}
                  value={signUpmEmail}
                  className='w-full pr-2 py-1 outline-none font-medium'
                />
                <div className='flex items-center gap-x-1 text-sm text-black cursor-pointer'>
                  <FaEnvelope />
                </div>
              </div>
            </div>

            <div className='flex items-center justify-between mt-3'>
              <div className='flex gap-x-2 items-center text-gray-800 font-medium'>
                <input type='radio' name='' id='agreeCheck' />
                <label htmlFor='agreeCheck'>
                  I agree with term {'$'} conditions
                </label>
              </div>
            </div>
            <div className='mt-5'>
              <button
                type='submit'
                className='w-full text-lg font-medium py-3 rounded-lg bg-primary text-white'
              >
                Sign Up
              </button>
            </div>
          </form>
          <div>
            <p className='w-max my-5 mx-auto'>Or</p>
            <div className=''>
              <div className='border mb-2 px-4 py-3 text-gray-700 font-medium  rounded-2xl flex justify-between items-center cursor-pointer'>
                <FaGoogle />
                <p>Sign Up with Google</p>
                <div></div>
              </div>
              <div className='border mb-2 px-4 py-3 text-gray-700 font-medium  rounded-2xl flex justify-between items-center cursor-pointer'>
                <FaFacebookF />
                <p>Sign Up with Facebook</p>
                <div></div>
              </div>
              <div className='border mb-2 px-4 py-3 text-gray-700 font-medium  rounded-2xl flex justify-between items-center cursor-pointer'>
                <FaTwitter />
                <p>Sign Up with Twitter</p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-1 bg-gray-200 py-4 text-primary-black'>
        <p>You have a account? </p>
        <span
          className='font-medium cursor-pointer'
          onClick={() => setType('login')}
        >
          Sign In
        </span>
      </div>
    </div>
  );
};

export default RegisterOne;
