import React from 'react';
import { FaLaptop, FaMobileAlt } from 'react-icons/fa';
import SettingLayout from '../shared/SettingLayout';
import Buttons from './Buttons';
import Item from './Item';

const SecurityContainer = () => {
  return (
    <SettingLayout
      navTitle='Security '
      navText='Your last activity and credentials'
      sideIcon={FaLaptop}
      sideTitle='Security credentials '
      sideText='There are many things that are important to catalog design. Your images must be sharp and appealing.'
    >
      <div className='mt-10'>
        <Item
          fieldName={'London 20 Oct 2020 at 04:32AM'}
          value={'Windows 10 Chrome'}
          Icon={FaLaptop}
          isCurrent
        />
        <Item
          fieldName={'London 01 Apr 2020 at 06:25PM'}
          value={'Windows 10 Mozilla Firefox'}
          Icon={FaLaptop}
        />
        <Item
          fieldName={'Berlin. 20 Oct 2020 at 04:32AM'}
          value={'Mac OS Safari'}
          Icon={FaLaptop}
        />
        <Item
          fieldName={'London • 06 Sep 2020 at 00:59PM '}
          value={'Android 10 Chrome'}
          Icon={FaMobileAlt}
        />
        <Item
          fieldName={'Madrid. 20 Oct 2020 at 04:32AM '}
          value={'iOS 13.Safari'}
          Icon={FaMobileAlt}
        />

        <div className='mt-10'>
          <Buttons />
        </div>
      </div>
    </SettingLayout>
  );
};

export default SecurityContainer;
