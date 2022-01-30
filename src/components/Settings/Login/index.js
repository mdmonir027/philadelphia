import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import Add from '../Billing/Add';
import Navigation from '../shared/Navigation';
import RightSidebar from '../shared/RightSidebar';
import Buttons from './Buttons';
import Password from './Password';
import Questions from './Questions';

const LoginContainer = () => {
  return (
    <div className='py-10'>
      <div className='custom-container'>
        <div className='md:flex md:justify-between'>
          <div className=' w-full md:w-6/12 '>
            <Navigation
              url={'/'}
              title={'Login  Details'}
              subTitle={'Your last activity and credentials'}
            />

            <div className='mt-10'>
              <Password />
              <Questions />
              <Add />
              <div className='mt-10'>
                <Buttons />
              </div>
            </div>
          </div>
          <div className='w-full md:w-4/12 mt-10 md:mt-40'>
            <RightSidebar
              Icon={FaShieldAlt}
              title='Password and questions'
              text={
                'From ads that dance or sing to MTV-like commercials, online advertisers are now using a new type of technology called media'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
