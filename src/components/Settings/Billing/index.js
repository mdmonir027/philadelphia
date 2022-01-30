import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import SettingLayout from '../shared/SettingLayout';
import Add from './Add';
import Buttons from './Buttons';
import Discount from './Discount';
import PayMethods from './PayMethods';

const BillingContainer = () => {
  return (
    <SettingLayout
      navTitle='Billing'
      navText={'Setup payments methods'}
      sideIcon={AiFillDollarCircle}
      sideTitle={'Payment Methods'}
      sideText={
        'What is your attitude as a small town businessman when it comes to advertising or taking help of an advertising design'
      }
    >
      <PayMethods />
      <Add />
      <Discount />
      <Buttons />
    </SettingLayout>
  );
};

export default BillingContainer;
