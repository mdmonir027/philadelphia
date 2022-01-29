import React from 'react';
import { createUseStyles } from 'react-jss';
import Content from './Content';
import DisplayPicture from './DisplayPicture';
// const bg = 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg';
const useStyles = createUseStyles({
  main: {
    background: `#eff3f2`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
});
const image =
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg';
const ProfileHero = () => {
  const classes = useStyles();
  return (
    <div className='relative'>
      <div className='mt-10 mb-10 hidden md:block'>
        <div className='custom-container'>
          <div
            className={`${classes.main} py-14 bg-[#eff3f2] rounded-lg px-10`}
          >
            <div className='sm:flex gap-4'>
              <div>
                <DisplayPicture image={image} />
              </div>
              <Content />
            </div>
          </div>
        </div>
      </div>
      <div className='mb-10 md:hidden'>
        <div className=''>
          <div className={`${classes.main} h-72 mb-14 bg-[#eff3f2] px-10`}>
            <DisplayPicture image={image} />
          </div>
          <div className='px-5'>
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
