import React from 'react';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';

const SignUpWithSocialMedia = () => {
  return (
    <>
      <div className='flex justify-between items-center gap-2 text-gray-600'>
        <div className='flex-1 h-1 border-b'></div>
        <p className='w-max my-5 mx-auto'>Or</p>
        <div className='flex-1 h-1 border-b'></div>
      </div>
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
    </>
  );
};

export default SignUpWithSocialMedia;
