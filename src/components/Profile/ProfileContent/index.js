import React from 'react';
import ActiveListing from '../ActiveListing';
import Testimonials from '../Testimonials';
import UpcomingReservation from '../UpcomingReservation';

const ProfileContentInfo = () => {
  return (
    <div className='content'>
      <div className='custom-container'>
        <h2 className='text-primary-black font-medium text-xl mb-4'>
          Active Listing
        </h2>
        <div className='md:flex'>
          <div className='md:w-2/3'>
            <ActiveListing />
          </div>
          <div className='md:w-1/3'>
            <UpcomingReservation />
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContentInfo;
