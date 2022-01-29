import React from 'react';
import ProfileContentInfo from '../../components/Profile/ProfileContent';
import ProfileHero from '../../components/Profile/ProfileHero';

const Profile = () => {
  return (
    <div className='relative'>
      <ProfileHero />
      <ProfileContentInfo />
    </div>
  );
};

export default Profile;
