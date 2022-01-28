import React from 'react';
import ContactUs from '../../components/ContactUse';
import HelpCenterHero from '../../components/HelpCenter/HelpCenterHero';
import HelpTopics from '../../components/HelpCenter/HelpTopics';
import UpcomingReservation from '../../components/HelpCenter/UpcomingReservation';
import PopularArticle from '../../components/PopularHelpArticle';

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
