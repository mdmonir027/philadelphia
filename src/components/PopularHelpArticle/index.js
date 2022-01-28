import React from 'react';
import Heading from '../heading/Heading';
import Card from './Card';

const PopularArticle = () => {
  return (
    <div className='my-20'>
      <div>
        <Heading text={'Popular Help Articles'} />
        <div className='md:flex md:flex-wrap lg:flex-nowrap'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default PopularArticle;
