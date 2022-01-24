import React from 'react';
import Apartments from '../../components/Apartment/Apartments';
import GoogleMap from '../../components/GoogleMap';
import FilterSidebar from '../../components/sidebar/FilterSidebar';

const Home = () => {
  return (
    <div className=''>
      <div className='custom-container'>
        <div className='md:flex gap-3'>
          <div className='w-1/2 pt-8'>
            <h2 className='text-4xl font-medium text-primary-black'>
              Aparments in Philadelphia
            </h2>
            <div className='md:flex gap-5 mt-8'>
              <div className='w-1/3'>
                <FilterSidebar />
              </div>
              <div className='w-2/3'>
                <div className=''>
                  <Apartments />
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
