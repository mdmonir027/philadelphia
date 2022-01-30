import React from 'react';
import { FaEye } from 'react-icons/fa';
import SettingLayout from '../shared/SettingLayout';
import Buttons from './Buttons';
import Item from './Item';

const PrivacyContainer = () => {
  return (
    <SettingLayout
      navTitle='Privacy'
      navText={'Connected apps and services'}
      sideIcon={FaEye}
      sideTitle={'Setup Profiles'}
      sideText={
        'The following tips on creating a direct mail advertising campaign have been street-tested and will bring you huge returns'
      }
    >
      <div className='mt-10'>
        <Item fieldName={'Facebook'} status={true} />
        <Item fieldName={'Google'} status={false} />
        <Item fieldName={'Twitter'} status={false} />
        <Item fieldName={'Instagram'} status={false} />
        <Item fieldName={'Dropbox'} status={false} />
        <div className='mt-10'>
          <Buttons />
        </div>
      </div>
    </SettingLayout>
  );
};

export default PrivacyContainer;
