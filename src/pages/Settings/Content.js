import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
const Content = ({ name, mail }) => {
  return (
    <>
      <div className='flex flex-col justify-between'>
        <div className=''>
          <div className='flex items-start justify-center gap-4  '>
            <h2
              className={`text-primary-black font-semibold text-xl md:text-3xl mb-1 mt-3 md:ml-8`}
            >
              {name}
            </h2>
            <BsFillPatchCheckFill className='text-green-600 text-xl' />
          </div>
          <p className='text-gray-600'>{mail}</p>
        </div>
      </div>
    </>
  );
};

export default Content;
