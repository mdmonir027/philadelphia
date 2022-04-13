import React from 'react';

const TopMenu = ({ filterType, setFilterType }) => {
  return (
    <div className='flex justify-between mb-4'>
      <h2 className='font-medium text-gray-900 text-2xl'>Latest Reviews</h2>
      <div>
        <ul className='flex gap-4'>
          <li
            onClick={() => setFilterType('positive')}
            className={`hover:cursor-pointer  px-5 py-2 text-sm rounded-md ${
              filterType === 'positive' ? 'border font-medium' : ''
            }`}
          >
            Positive
          </li>
          <li
            onClick={() => setFilterType('neutral')}
            className={`hover:cursor-pointer px-5 py-2 text-sm rounded-md ${
              filterType === 'neutral' ? 'border font-medium' : ''
            }`}
          >
            Neutral
          </li>
          <li
            onClick={() => setFilterType('negative')}
            className={`hover:cursor-pointer px-5 py-2 text-sm rounded-md ${
              filterType === 'negative' ? 'border font-medium' : ''
            }`}
          >
            Negative
          </li>
          <li
            onClick={() => setFilterType('all')}
            className={`hover:cursor-pointer  px-5 py-2 text-sm rounded-md ${
              filterType === 'all' ? 'border font-medium' : ''
            }`}
          >
            All
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopMenu;
