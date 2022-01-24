import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Profile from './Profile';

const Header = () => {
  return (
    <div className='header py-4 shadow-md mb-3'>
      <div className='container mx-auto px-10'>
        <div className='md:flex justify-between gap-2 items-center'>
          <div className='md:flex gap-5 items-center flex-1'>
            <Logo />
            <Menu />
          </div>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Header;
