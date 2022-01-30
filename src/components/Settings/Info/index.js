import React, { useState } from 'react';
import { FaUserCog } from 'react-icons/fa';
import SettingLayout from '../shared/SettingLayout';
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
    <SettingLayout
      navTitle='Global Preference'
      navText={'Setup currency and language'}
      sideIcon={FaUserCog}
      sideTitle={'Global Preference'}
      sideText={
        'Branding is no longer simply about visual appeal or the cherry in the apple pie example, as given in my earlier article.'
      }
    >
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
    </SettingLayout>
  );
};

export default InfoContainer;
