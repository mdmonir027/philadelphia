import React from 'react';
import { routes } from '../../../routes';
import Navigation from './Navigation';
import RightSidebar from './RightSidebar';

const SettingLayout = (props) => {
  const { children, navTitle, navText, sideIcon, sideTitle, sideText } = props;
  return (
    <div className='py-10'>
      <div className='custom-container'>
        <div className='sm:flex sm:justify-between'>
          <div className=' w-full md:w-6/12 '>
            <Navigation
              url={routes.settings.main}
              title={navTitle}
              subTitle={navText}
            />
            {children}
          </div>
          <div className='w-full md:w-4/12 mt-10 md:mt-40'>
            <RightSidebar Icon={sideIcon} title={sideTitle} text={sideText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingLayout;
