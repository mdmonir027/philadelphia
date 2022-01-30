import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import Add from '../Billing/Add';
import SettingLayout from '../shared/SettingLayout';
import Buttons from './Buttons';
import Password from './Password';
import Questions from './Questions';

const LoginContainer = () => {
  return (
    <SettingLayout
      navTitle='Login  Details'
      navText={'Your last activity and credentials'}
      sideIcon={FaShieldAlt}
      sideTitle={'Password and questions'}
      sideText={
        'From ads that dance or sing to MTV-like commercials, online advertisers are now using a new type of technology called media'
      }
    >
      <div className='mt-10'>
        <Password />
        <Questions />
        <Add />
        <div className='mt-10'>
          <Buttons />
        </div>
      </div>
    </SettingLayout>
  );
};

export default LoginContainer;
