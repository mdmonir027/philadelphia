import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import Navigation from '../shared/Navigation';
import RightSidebar from '../shared/RightSidebar';
import Add from './Add';
import Discount from './Discount';
import PayMethods from './PayMethods';

const BillingContainer = () => {
  return (
    <div className='py-10'>
      <div className='custom-container'>
        <div className='sm:flex sm:justify-between'>
          <div className='w-6/12 '>
            <Navigation
              url={'/'}
              title={'Billing'}
              subTitle={'Setup payments methods'}
            />
            <PayMethods />
            <Add />
            <Discount />
          </div>
          <div className='w-4/12 mt-40'>
            <RightSidebar
              Icon={AiFillDollarCircle}
              title='Payment Methods'
              text={
                'What is your attitude as a small town businessman when it comes to advertising or taking help of an advertising design'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingContainer;
