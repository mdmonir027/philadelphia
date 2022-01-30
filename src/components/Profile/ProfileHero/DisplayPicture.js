import React from 'react';

const DisplayPicture = ({ image, isProfileInfo }) => {
  if (isProfileInfo) {
    return (
      <div
        className={` w-32 h-32 sm:w-40 sm:h-40 overflow-hidden rounded-lg mx-auto`}
      >
        <img src={image} alt='' className='w-full h-full object-cover' />
      </div>
    );
  }
  return (
    <>
      <div
        className={`w-40 h-40 overflow-hidden rounded-lg hidden md:block ${
          isProfileInfo ? 'mx-auto' : ''
        }`}
      >
        <img src={image} alt='' className='w-full h-full object-cover' />
      </div>

      {/* mobile  */}
      <div className='top-[14rem] absolute w-20 h-20 overflow-hidden rounded-lg md:hidden'>
        <img src={image} alt='' className='w-full h-full object-cover' />
      </div>
    </>
  );
};

export default DisplayPicture;
