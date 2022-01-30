import React from 'react';
import { FaGlobeAmericas, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const ProfileInfoData = () => {
  const classNames = {
    wrapper:
      'w-full md:w-2/3 pb-6 mb-2 border-b justify-between items-center flex box-border px-4  py-2 rounded-md',
    name: 'text-gray-600 font-light text-sm',
    value: 'text-lg font-bold text-primary-black',
    icon: 'bg-gray-100 flex justify-center items-center p-4 rounded-md text-xl text-gray-400',
  };
  return (
    <div className='py-14 '>
      <div className='custom-container'>
        <div className='flex justify-center items-center flex-col gap-5'>
          <div className={classNames.wrapper}>
            <div>
              <p className={classNames.name}>Locaiton</p>
              <p className={classNames.value}>Tbilisi , Georgia</p>
            </div>
            <div className={classNames.icon}>
              <FaMapMarkerAlt />
            </div>
          </div>
          <div className={classNames.wrapper}>
            <div>
              <p className={classNames.name}>Languages</p>
              <p className={classNames.value}>English, German</p>
            </div>
            <div className={classNames.icon}>
              <FaGlobeAmericas />
            </div>
          </div>
          <div className={classNames.wrapper}>
            <div>
              <p className={classNames.name}>Overall Review Score</p>
              <p className={classNames.value}>Positive 4.96</p>
            </div>
            <div className={classNames.icon}>
              <FaStar />
            </div>
          </div>
          <div className={classNames.wrapper}>
            <div>
              <p className={classNames.name}>Upcoming Reservation</p>
              <p className={classNames.value}>10 Sep - 20 Sep,2020</p>
            </div>
            <div className={classNames.icon}>
              <FaMapMarkerAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoData;
