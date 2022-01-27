import React, { useState } from 'react';
import { FaCalendarAlt, FaSearch } from 'react-icons/fa';
const Menu2 = () => {
  const [value1, setValue1] = useState('Philadelphia');
  const [value2, setValue2] = useState('Guest');
  return (
    <>
      <div className='border border-gray-300 w-2/3 rounded px-1 md:flex '>
        <div className='py-3 border-r-2 w-4/12 bg-white px-3'>
          <input
            type='text'
            name=''
            id=''
            className='outline-none bg-transparent w-full text-black'
            placeholder='Philadelphia'
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
          />
        </div>
        <div className='date-picker flex py-3 px-3 border-r-2 w-2/12 bg-white justify-between items-center'>
          <p>Aug 25</p>
          <div className='icon'>
            <FaCalendarAlt />
          </div>
        </div>
        <div className='date-picker flex py-3 px-3 border-r-2 w-2/12 bg-white justify-between items-center'>
          <p>Aug 29</p>
          <div className='icon'>
            <FaCalendarAlt />
          </div>
        </div>
        <div className=' w-4/12 bg-white flex justify-center items-center gap-3 px-3'>
          <div className='flex-1 mt-1'>
            <input
              type='text'
              name=''
              id=''
              className='outline-none  w-full flex-1'
              placeholder='Guest'
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
            />
          </div>
          <div className=' bg-primary text-white py-3 px-3  flex justify-center items-center rounded-md cursor-pointer'>
            <FaSearch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu2;
