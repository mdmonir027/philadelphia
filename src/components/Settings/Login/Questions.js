import React from 'react';
import { FaCommentAlt, FaPen } from 'react-icons/fa';
import Title from '../shared/Title';

const Questions = () => {
  return (
    <div className='mt-10'>
      <Title text={'Security Questions'} />
      <div className='px-4  flex py-3 rounded-lg border mb-6 items-center'>
        <input
          type='text'
          className='w-full pr-2 py-1 outline-none flex-1'
          name=''
          id=''
          placeholder='Questions #1'
        />
        <FaPen className='text-gray-500' />
      </div>
      <div className='px-4  flex py-3 rounded-lg border mb-2 items-center'>
        <input
          type='text'
          className='w-full pr-2 py-1 outline-none flex-1'
          name=''
          id=''
          placeholder='Answer'
        />
        <FaCommentAlt className='text-gray-500' />
      </div>
    </div>
  );
};

export default Questions;
