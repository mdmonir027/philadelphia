import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FaGlobeAmericas, FaMapMarkerAlt } from 'react-icons/fa';
const Content = () => {
  return (
    <>
      <div className='flex flex-col justify-between'>
        <div className=''>
          <div className='flex items-start gap-4 '>
            <h2 className='text-primary-black font-semibold text-xl md:text-3xl mb-1'>
              Jushawan McDowell
            </h2>
            <BsFillPatchCheckFill className='text-green-600 text-xl' />
          </div>
          <p className='text-gray-600'>Joined in 2016</p>
        </div>
        <div className='flex gap-4 flex-wrap mt-4 md:mt-4'>
          <div className='flex items-center gap-2 '>
            <div className=' w-14 h-14 rounded-md bg-[#c5dad5] text-white flex justify-center items-center text-3xl'>
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className='text-primary-black font-bold'>Tbilisi , Gerogia</p>
              <p className='text-primary-black font-light'>Location</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className=' w-14 h-14 rounded-md bg-[#c5dad5] text-white flex justify-center items-center text-3xl'>
              <FaGlobeAmericas />
            </div>
            <div>
              <p className='text-primary-black font-bold'>Speaks Languages</p>
              <p className='text-primary-black font-light'>Location</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
