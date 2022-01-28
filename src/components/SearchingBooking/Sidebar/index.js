import React from 'react';
import { createUseStyles } from 'react-jss';
import Heading from '../shared/Heading';

const useStyles = createUseStyles({
  active: {
    '&:before': {
      content: '""',
      display: 'block',
      width: 2,
      height: 20,
      background: 'red',
      position: 'absolute',
      left: 0,
      top: 0,
    },
  },
});

const Sidebar = ({ Icon, title, list = [] }) => {
  const classes = useStyles();
  return (
    <div className='w-full md:w-1/4'>
      <div className={`border mb-2 py-5 rounded-lg  duration-500`}>
        <div className='px-3'>
          <div className='bg-gray-200 rounded-lg mb-5 w-14 h-14 flex justify-center items-center text-xl'>
            <Icon />
          </div>
          <Heading text={title} size='small' />
        </div>
        <ul className='mt-4 relative'>
          {list.map((link) => (
            <li
              key={link.id}
              className={`my-3 text-gray-500 px-4 ${
                link.isActive ? classes.active : ''
              }`}
            >
              <a href={link.url}>{link.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
