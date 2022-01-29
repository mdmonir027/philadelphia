import React from 'react';

const DisplayPicture = ({ image }) => {
  return (
    <>
      <div className='w-40 h-40 overflow-hidden rounded-lg hidden md:block'>
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
