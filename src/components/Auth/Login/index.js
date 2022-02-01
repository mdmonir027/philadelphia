import React, { useState } from 'react';
import {
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaTimes,
  FaTimesCircle,
  FaTwitter,
} from 'react-icons/fa';

const Login = ({ setType, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <div>
      <div className='my-4'>
        <div className='py-2  px-5 pb-6 border-b-2 relative text-black flex justify-between items-center'>
          <div></div>
          <h2 className='text-center text-3xl font-medium'>Sign In</h2>
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
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className='w-full pr-2 py-1 outline-none font-medium'
                />
                <div className='flex items-center gap-x-1 text-sm text-black cursor-pointer'>
                  <FaEnvelope />
                </div>
              </div>
            </div>

            <div className='mb-2 pb-3 border px-4 py-3 rounded'>
              <p className='font-normal text-xs text-gray-900 '>Password</p>

              <div className='flex justify-between items-center text-lg'>
                <input
                  type='email'
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className='w-full pr-2 py-1 outline-none font-medium'
                />
                <div className='flex items-center gap-x-1 text-base text-red-500 cursor-pointer'>
                  <FaTimesCircle />
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between mt-3'>
              <div className='flex gap-x-2 items-center text-black font-medium'>
                <input type='radio' name='' id='' />
                <p>Remember me</p>
              </div>
              <p
                onClick={() => setType('password-recover')}
                className='text-red-500 cursor-pointer'
              >
                Recover password
              </p>
            </div>
            <div className='mt-5'>
              <button
                type='submit'
                className='w-full text-lg font-medium py-3 rounded-lg bg-primary text-white'
              >
                Sign In
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
        <p>You don't have a account? </p>
        <span
          className='font-medium cursor-pointer'
          onClick={() => setType('register-1')}
        >
          Sign Up
        </span>
      </div>
    </div>
  );
};

export default Login;
