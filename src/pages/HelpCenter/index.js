import React from 'react';
import HelpCenterHero from '../../components/HelpCenter/HelpCenterHero';
import HelpTopics from '../../components/HelpCenter/HelpTopics';
import UpcomingReservation from '../../components/HelpCenter/UpcomingReservation';

const HelpCenter = () => {
  return (
    <div>
      <HelpCenterHero />
      <UpcomingReservation />
      <HelpTopics />
    </div>
  );
};

export default HelpCenter;
