import React from 'react';
import LittleHeading from '../shared/LittleHeading';
import AllItems from './AllItems';

const SearchItems = () => {
  return (
    <>
      <div className='w-full md:w-3/4'>
        <LittleHeading text='Search Tips' />
        <AllItems />
      </div>
    </>
  );
};

export default SearchItems;
