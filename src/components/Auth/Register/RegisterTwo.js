import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaEnvelope, FaTimes, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useInnerSize } from '../../../hook/useInnerSize';

const RegisterTwo = ({ handleClose, email }) => {
  const { width } = useInnerSize();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  useEffect(() => {
    if (!email) {
      navigate('/auth/register-1');
    }
  }, [email, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, password, confirmPassword, email });
    navigate('/auth/register-success');
  };
  return (
    <div>
      <div className='my-4'>
        <div className='py-2  px-5 pb-6 border-b-2 relative text-black flex justify-between items-center'>
          <FaArrowLeft
            className='cursor-pointer'
            onClick={() => navigate('/auth/register-1')}
          />
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
          <form className='mb-5' onSubmit={submitHandler}>
            <div className='pb-2 mb-2 border px-4 py-3 rounded'>
              <p className='font-normal text-xs text-gray-900 '>Email</p>

              <div className='flex justify-between items-center text-lg'>
                <input
                  type='email'
                  placeholder='Email'
                  disabled
                  value={email}
                  className='w-full pr-2 py-1 outline-none font-medium disabled:text-gray-500'
                />
                <div className='flex items-center gap-x-1 text-sm text-black cursor-pointer'>
                  <FaEnvelope />
                </div>
              </div>
            </div>

            <div className='flex gap-3'>
              <div className='pb-2 mb-2 border px-4 py-3 rounded w-1/2'>
                <div className='flex justify-between items-center text-lg'>
                  <input
                    type='text'
                    placeholder='First name'
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    className='w-full pr-2 py-1 outline-none font-medium'
                  />
                  <div className='flex items-center gap-x-1 text-sm text-black cursor-pointer'>
                    <FaUser />
                  </div>
                </div>
              </div>
              <div className='pb-2 mb-2 border px-4 py-3 rounded w-1/2'>
                <div className='flex justify-between items-center text-lg'>
                  <input
                    type='text'
                    placeholder='Last Name'
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    className='w-full pr-2 py-1 outline-none font-medium'
                  />
                  <div className='flex items-center gap-x-1 text-sm text-black cursor-pointer'>
                    <FaUser />
                  </div>
                </div>
              </div>
            </div>

            <div className='pb-2 mb-2 border px-4 py-3 rounded'>
              <div className='flex justify-between items-center text-lg'>
                <input
                  type='password'
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className='w-full pr-2 py-1 outline-none font-medium'
                />
                <div className='flex items-center gap-x-1 text-sm text-black cursor-pointer'>
                  <FaEnvelope />
                </div>
              </div>
            </div>

            <div className='pb-2 mb-2 border px-4 py-3 rounded'>
              <div className='flex justify-between items-center text-lg'>
                <input
                  type='password'
                  placeholder='Confirm password'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  className='w-full pr-2 py-1 outline-none font-medium'
                />
                <div className='flex items-center gap-x-1 text-sm text-black cursor-pointer'>
                  <FaEnvelope />
                </div>
              </div>
            </div>
            <div>
              <div className='flex items-center justify-between mt-3'>
                <label className='inline-flex items-center'>
                  <input
                    type='checkbox'
                    className='h-4 w-4 bg-gray-600  border-gray-300 focus:ring-3 focus:ring-red-300 rounded'
                  />
                  <span className='ml-2 text-gray-700'>
                    I agree with term {'&'} conditions
                  </span>
                </label>
              </div>
              <div className='mt-5'>
                <button
                  type='submit'
                  className='w-full text-lg font-medium py-3 rounded-lg bg-primary text-white'
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterTwo;
