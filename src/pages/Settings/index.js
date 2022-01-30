import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DisplayPicture from '../../components/Profile/ProfileHero/DisplayPicture';
import Content from './Content';
import Menus from './Menus';

const Settings = () => {
  return (
    <div className='py-10'>
      <div className='mb-3'>
        <div className='custom-container'>
          <div className='flex justify-between items-center'>
            <p className='text-xl font-medium'>Account Settings</p>
            <Link
              to='/'
              className='border px-5 py-3 text-sm rounded-md text-black flex justify-center items-center'
            >
              <span className='hidden sm:inline-block'>
                Your Public Profile
              </span>
              <span className='inline-block sm:hidden'>
                <FaEye />
              </span>
            </Link>
          </div>
          <div className='w-full md:w-1/3 mx-auto text-center mt-10'>
            <DisplayPicture
              image='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
              isProfileInfo
            />
            <Content name={'Md Monirul Islam'} mail={'mmislam027@gmail.com'} />
          </div>
          <Menus />
        </div>
      </div>
    </div>
  );
};

export default Settings;
