import React from 'react';
import Heading from '../shared/Heading';
import AllBoxes from './AllBoxes';

const HelpTopics = () => {
  return (
    <div className='mb-24'>
      <div className='custom-container'>
        <Heading text={'Help topics'} />
        <AllBoxes />
      </div>
    </div>
  );
};

export default HelpTopics;
