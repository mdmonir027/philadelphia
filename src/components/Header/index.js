import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Profile from './Profile';

const Header = ({ setOpen }) => {
  return (
    <div className='header py-4 shadow-md relative hidden md:block'>
      <div className='custom-container'>
        <div className='md:flex justify-between gap-2 items-center'>
          <div className='md:flex gap-5 items-center flex-1'>
            <Logo />
            <Menu />
          </div>
          <div onClick={() => setOpen(true)}>
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
