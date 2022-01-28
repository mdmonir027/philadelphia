import React from 'react';

const LittleHeading = ({ text, size = 'small' }) => {
  return (
    <h2
      className={`${size === 'big' ? 'text-3xl  mb-7' : ''} ${
        size === 'small' ? 'text-2xl mb-2' : ''
      }  font-semibold text-primary-black`}
    >
      {text}
    </h2>
  );
};
export default LittleHeading;
