import React, { useState } from 'react';
import { FaUserCog } from 'react-icons/fa';
import Navigation from '../shared/Navigation';
import RightSidebar from '../shared/RightSidebar';
import Buttons from './Buttons';
import Item from './Item';

const InfoContainer = () => {
  const [fullName, setFullName] = useState('Johanna Stevens');
  const [email, setEmail] = useState('j.mcdowel@gmail.com');
  const [phone, setPhone] = useState('+995 590 558 124');
  const [address, setAddress] = useState(null);
  const [gender, setGender] = useState('Female');
  const [dob, setDob] = useState('January 24 , 1983');
  return (
    <div className='py-10'>
      <div className='custom-container'>
        <div className='md:flex md:justify-between'>
          <div className=' w-full md:w-6/12 '>
            <Navigation
              url={'/'}
              title={'Global Preference'}
              subTitle={'Setup currency and language'}
            />
            <div className='mt-10'>
              <Item
                name={'Full Name'}
                value={fullName}
                getValue={(value) => setFullName(value)}
              />
              <Item
                name={'Gender'}
                value={gender}
                getValue={(value) => setGender(value)}
              />
              <Item
                name={'Data of Birth'}
                value={dob}
                getValue={(value) => setDob(value)}
              />
              <Item
                name={'Email Address'}
                value={email}
                getValue={(value) => setEmail(value)}
              />
              <Item
                name={'Phone number'}
                value={phone}
                getValue={(value) => setPhone(value)}
              />
              <Item
                name={'Address'}
                value={address}
                getValue={(value) => setAddress(value)}
              />

              <div className='mt-20'>
                <Buttons />
              </div>
            </div>
          </div>
          <div className='w-full md:w-4/12 mt-10 md:mt-40'>
            <RightSidebar
              Icon={FaUserCog}
              title='Global Preference'
              text={
                'Branding is no longer simply about visual appeal or the cherry in the apple pie example, as given in my earlier article.'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
