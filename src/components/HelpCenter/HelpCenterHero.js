import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { createUseStyles } from 'react-jss';
const bg = 'https://images.pexels.com/photos/565324/pexels-photo-565324.jpeg';
const useStyles = createUseStyles({
  main: (bg) => ({
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }),
});

const UpcomingHero = () => {
  const classes = useStyles(bg);
  const [keyword, setKeyword] = useState('Reservation refund');
  return (
    <div
      className={`${classes.main} h-[30rem] flex justify-center items-center`}
    >
      <div className='custom-container'>
        <h2 className='text-4xl text-[#382f32] font-extrabold mb-3'>
          Search for a help article
        </h2>
        <p className='w-1/2 mb-8 text-gray-600 font-medium'>
          Businesses often become known today through effective marketing. The
          marketing may be in the form.
        </p>
        <div className='w-2/3 bg-white rounded-md px-5 items-center py-3 flex'>
          <div className='flex-1'>
            <p className='text-gray-600 font-light'>Your Request</p>
            <div className='inputWrapper'>
              <input
                type='text'
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='Search here'
                className='w-full outline-none border-none placeholder:font-medium font-medium text-xl'
              />
            </div>
          </div>
          <div className='bg-primary p-4 rounded-lg text-white'>
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingHero;
