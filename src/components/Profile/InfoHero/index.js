import React from 'react';
import { createUseStyles } from 'react-jss';
import Content from '../ProfileHero/Content';
import DisplayPicture from '../ProfileHero/DisplayPicture';

const bg = 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg';
const useStyles = createUseStyles({
  main: {
    background: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
});
const image =
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg';
const ProfileInfoHero = () => {
  const classes = useStyles();
  return (
    <div className='relative'>
      <div className='mb-10'>
        <div className=''>
          <div className={`${classes.main} h-72 mb-44 bg-[#eff3f2] px-10 `}>
            <div className='text-center flex justify-center'>
              <div className='absolute top-56 sm:top-52'>
                <DisplayPicture image={image} isProfileInfo />
                <Content showInfos={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoHero;
