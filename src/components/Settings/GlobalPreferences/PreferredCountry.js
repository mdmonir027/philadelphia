import React, { useEffect, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import Select from 'react-select';
const selectCustomStyle = {
  control: (provided) => ({
    ...provided,
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};
const PreferredCountry = () => {
  const [isEdit, setIsEdit] = useState(false);
  const onChangeHandler = (data) => {
    console.log(data);
  };
  useEffect(() => {
    if (isEdit) {
      setTimeout(() => {
        setIsEdit(false);
      }, 1000);
    }
  }, [isEdit]);

  return (
    <div className=' mt-8 pb-3 border-b'>
      <p className='font-normal text-sm text-gray-900'>Primary Country</p>

      {isEdit ? (
        <>
          <Select
            styles={selectCustomStyle}
            options={[]}
            onChange={onChangeHandler}
            // defaultValue={options.find((i) => {
            //   if (i.value === selected) {
            //     return i;
            //   }
            //   return {};
            // })}
          />
        </>
      ) : (
        <div className='flex justify-between'>
          <h2 className='text-gray-800 font-semibold text-lg'>Gergia</h2>
          <div className='flex items-center gap-x-1 text-sm text-gray-600 cursor-pointer'>
            <FaPencilAlt />
            <p onClick={() => setIsEdit(true)}>Edit</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreferredCountry;
