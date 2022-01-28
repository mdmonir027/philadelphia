import React from 'react';

const Heading = ({ text, size = 'big', mb = 7 }) => {
  return (
    <h2
      className={` mb-${mb} ${size === 'big' ? 'text-3xl' : ''} ${
        size === 'small' ? 'text-2xl' : ''
      }  font-semibold text-primary-black`}
    >
      {text}
    </h2>
  );
};
export default Heading;
