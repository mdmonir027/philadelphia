import React, { useEffect, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';

const Item = ({ value, getValue, name }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newValue, setNeValue] = useState();

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      getValue(e.target.value);
      setIsEdit(false);
    }
  };
  useEffect(() => {
    setNeValue(value);
  }, [value]);

  return (
    <div className=' mt-8 pb-3 border-b'>
      <p className='font-normal text-sm text-gray-900'>{name}</p>

      {isEdit ? (
        <>
          <input
            type='text'
            name=''
            placeholder={name}
            onChange={(e) => setNeValue(e.target.value)}
            onKeyDown={onKeyDownHandler}
            id=''
            value={newValue || ''}
            className='w-full pr-2 py-1 outline-none'
          />
        </>
      ) : (
        <div className='flex justify-between'>
          <h2 className='text-gray-800 font-semibold text-lg'>
            {value || 'Not Provided'}
          </h2>
          <div className='flex items-center gap-x-1 text-sm text-gray-600 cursor-pointer'>
            <FaPencilAlt />
            <p onClick={() => setIsEdit(true)}>Edit</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
