import React from 'react';
import { createUseStyles } from 'react-jss';
import Heading from '../shared/Heading';
const useStyles = createUseStyles({
  main: {
    '&:hover .icon': {
      color: '#fef2f2',
      background: '#F87171',
    },
  },
});
const Box = ({ Icon, title, list = [] }) => {
  const classes = useStyles();
  return (
    <div
      className={`border w-full md:w-1/2 lg:w-1/3 px-7 py-5 rounded-lg hover:border-none hover:cursor-pointer hover:shadow-xl transition-shadow duration-500 ${classes.main}`}
    >
      <div className='bg-gray-200 rounded-lg mb-5 w-14 h-14 flex justify-center items-center text-xl text  icon transition-colors duration-300'>
        <Icon />
      </div>
      <Heading text={title} size='small' />
      <ul className='mt-4'>
        {list.map((link) => (
          <li key={link.id} className='mb-2 text-gray-500'>
            <a href={link.url}>{link.value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Box;
