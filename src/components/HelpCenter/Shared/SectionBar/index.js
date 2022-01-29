import React from 'react';
import Heading from '../../heading/Heading';
import Breadcrumb from '../../SearchingBooking/Breadcrumb';

const SectionBar = ({ links, text, mb }) => {
  return (
    <div>
      <Heading text={text} mb={mb} />
      <Breadcrumb links={links} />
    </div>
  );
};

export default SectionBar;
