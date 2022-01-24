import React from 'react';
const image =
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
const Profile = () => {
  return (
    <div className='w-12 h-12 rounded-md overflow-hidden cursor-pointer'>
      <img src={image} alt='' className='h-full w-full object-cover' />
    </div>
  );
};

export default Profile;
