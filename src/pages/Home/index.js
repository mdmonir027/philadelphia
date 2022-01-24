import React from 'react';
import FilterSidebar from '../../components/sidebar/FilterSidebar';

const Home = () => {
  return (
    <div className='pt-8'>
      <div className='custom-container'>
        <h2 className='text-4xl font-medium text-primary-black'>
          Aparments in Philadelphia
        </h2>
        <div className='md:flex gap-5 mt-8'>
          <div className='w-1/4'>
            <FilterSidebar />
          </div>
          <div>
            <div className=''>
              <h2>content</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
