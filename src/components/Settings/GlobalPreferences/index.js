import React from 'react';
import { FaUserCog } from 'react-icons/fa';
import SettingLayout from '../shared/SettingLayout';
import Buttons from './Buttons';
import PreferredCountry from './PreferredCountry';
import PreferredCurrency from './PreferredCurrency';
import PreferredTimezone from './PreferredTimezone';
import SelectLanguage from './SelectLanguage';

const GlobalPreferenceContainer = () => {
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
        <SelectLanguage />
        <PreferredCurrency />
        <PreferredTimezone />
        <PreferredCountry />
        <div className='mt-20'>
          <Buttons />
        </div>
      </div>
    </SettingLayout>
  );
};

export default GlobalPreferenceContainer;
