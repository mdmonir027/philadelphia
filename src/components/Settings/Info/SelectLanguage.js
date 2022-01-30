import React from 'react';
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
const SelectLanguage = () => {
  const onChangeHandler = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className='px-4 py-3 rounded-lg border'>
        <p className='font-normal text-gray-900'>Preferred Language</p>
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
      </div>
    </div>
  );
};

export default SelectLanguage;
