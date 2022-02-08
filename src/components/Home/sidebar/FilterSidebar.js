import React from 'react';
import Amenities from './filter/Amenities';
import ApartmentType from './filter/ApartmentType';
import Input from './filter/Input';
import Rating from './filter/Rating';

const FilterSidebar = () => {
  return (
    <div className='w-full'>
      <div>
        <Input />
        <ApartmentType />
        <Rating />
        <Amenities />
      </div>
    </div>
  );
};

export default FilterSidebar;
