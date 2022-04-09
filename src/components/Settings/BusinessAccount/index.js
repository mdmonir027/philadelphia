import React, { useState } from 'react';
import { FaLaptop } from 'react-icons/fa';
import SettingLayout from '../shared/SettingLayout';
import Buttons from './Buttons';
import Item from './Item';
import Team from './Team';

const BusinessAccountContainer = () => {
  const [companyName, setCompanyName] = useState('Johanna Stevens');
  const [address, setAddress] = useState('j.mcdowel@gmail.com');

  return (
    <SettingLayout
      navTitle='Business Account'
      navText='Setup your team for collaboration'
      sideIcon={FaLaptop}
      sideTitle='Collaboration'
      sideText='In efforts to expand our horizons, we welcome every investment-minded individ to join us in the Condotel Investment'
    >
      <div className='mt-10'>
        <h2>Business Details</h2>
        <Item
          name={'Company Name'}
          value={companyName}
          getValue={(value) => setCompanyName(value)}
        />
        <Item
          name={'Address'}
          value={address}
          getValue={(value) => setAddress(value)}
        />

        <Team />

        <div className='mt-10'>
          <Buttons />
        </div>
      </div>
    </SettingLayout>
  );
};

export default BusinessAccountContainer;
