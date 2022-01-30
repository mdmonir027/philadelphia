import React from 'react';
import { FaUserCog } from 'react-icons/fa';
import Navigation from '../shared/Navigation';
import RightSidebar from '../shared/RightSidebar';
import Buttons from './Buttons';
import PreferredCountry from './PreferredCountry';
import PreferredCurrency from './PreferredCurrency';
import PreferredTimezone from './PreferredTimezone';
import SelectLanguage from './SelectLanguage';

const GlobalPreferenceContainer = () => {
  return (
    <div className='py-10'>
      <div className='custom-container'>
        <div className='sm:flex sm:justify-between'>
          <div className=' w-full md:w-6/12 '>
            <Navigation
              url={'/'}
              title={'Global Preference'}
              subTitle={'Setup currency and language'}
            />
            <div className='mt-10'>
              <SelectLanguage />
              <PreferredCurrency />
              <PreferredTimezone />
              <PreferredCountry />
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

export default GlobalPreferenceContainer;
