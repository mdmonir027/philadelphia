import React from 'react';
import { FaStar } from 'react-icons/fa';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  imageMain: (image) => ({
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }),
  dot: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 7,
    '&:before': {
      content: '""',
      display: 'inline-block',
      width: '5px',
      height: '5px',
      background: '#0007',
      borderRadius: '50%',
    },
  },
});

const CardItem = ({ price, rating, title, utility = [], image }) => {
  const classes = useStyles(image);
  return (
    <div className='px-2 w-full mb-4 hover:cursor-pointer'>
      <div className=''>
        <div
          className={`${classes.imageMain} h-40 lg:h-60 rounded overflow-hidden px-4 py-5 flex justify-between items-start border mb-2`}
        >
          <div className='flex justify-between items-center bg-white px-3 py-1 rounded-md gap-2'>
            <FaStar className='text-primary' />
            <p className='text-xl text-primary-black'>{rating}</p>
          </div>
          <div className='flex justify-between items-center bg-white px-3 py-1 rounded-md gap-2'>
            <p className='text-xl text-primary-black'>
              {'$'}
              {price}
            </p>
          </div>
        </div>
        <h2 className='text-primary-black text-xl font-bold mb-2'>{title}</h2>
        <ul className='flex flex-wrap gap-2'>
          {utility.map((item, i) => (
            <li
              key={Math.random()}
              className={`${
                i !== 0 ? classes.dot : ''
              } text-primary-black font-light`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardItem;
