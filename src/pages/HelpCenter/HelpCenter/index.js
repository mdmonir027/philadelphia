import React from 'react';
import ContactUs from '../../../components/HelpCenter/ContactUse';
import HelpCenterHero from '../../../components/HelpCenter/HelpCenter/HelpCenterHero';
import HelpTopics from '../../../components/HelpCenter/HelpCenter/HelpTopics';
import UpcomingReservation from '../../../components/HelpCenter/HelpCenter/UpcomingReservation';
import PopularArticle from '../../../components/HelpCenter/PopularHelpArticle';

const HelpCenter = () => {
  return (
    <div>
      <HelpCenterHero />
      <UpcomingReservation />
      <HelpTopics />
      <PopularArticle />
      <ContactUs />
    </div>
  );
};

export default HelpCenter;
