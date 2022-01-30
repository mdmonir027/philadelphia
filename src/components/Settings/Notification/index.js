import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import SettingLayout from '../shared/SettingLayout';
import Buttons from './Buttons';
import TogglerItem from './TooglerItem';

const NotificationContainer = () => {
  const [a1, setA1] = useState(true);
  const [a2, setA2] = useState(false);
  const [a3, setA3] = useState(true);
  const [a4, setA4] = useState(true);
  const [a5, setA5] = useState(false);
  const [a6, setA6] = useState(true);
  return (
    <SettingLayout
      navTitle='Notifications'
      navText={'Set you email notifications'}
      sideIcon={FaBell}
      sideTitle={'Updates and alerts'}
      sideText={
        'Advertising is telling the world how great you are, while publicity is having others tell the world how great you are.'
      }
    >
      <div className='mt-10'>
        <TogglerItem
          field={'Product updates '}
          value={'Receive messages from our platform'}
          checked={a1}
          getValue={() => setA1((p) => !p)}
        />
        <TogglerItem
          field={'Reminders '}
          value={'Receive booking reminders, pricing notices'}
          checked={a2}
          getValue={() => setA2((p) => !p)}
        />
        <TogglerItem
          field={'Promotions and tips'}
          value={'Receive coupons, promotions, surveys'}
          checked={a3}
          getValue={() => setA3((p) => !p)}
        />
        <TogglerItem
          field={'Policy and community'}
          value={'Receive updates on home sharing regulations'}
          checked={a4}
          getValue={() => setA4((p) => !p)}
        />
        <TogglerItem
          field={'Account support'}
          value={
            'Receive messages about your account, your trips, legal alerts'
          }
          checked={a5}
          getValue={() => setA5((p) => !p)}
        />
        <TogglerItem
          field={'Ads and promotions'}
          value={'Unsubscribe from all marketing emails '}
          checked={a6}
          getValue={() => setA6((p) => !p)}
        />
        <div className='mt-10'>
          <Buttons />
        </div>
      </div>
    </SettingLayout>
  );
};

export default NotificationContainer;

/* 
Reminders 
Receive booking reminders, pricing notices

Promotions and tips
Receive coupons, promotions, surveys

Policy and community
Receive updates on home sharing regulations

Account support
Receive messages about your account, your trips, legal alerts

Ads and promotions
Unsubscribe from all marketing emails 
*/
