import React, { useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
const listItems = [
  {
    id: shortid(),
    name: 'Booking',
    url: '/',
    isActive: true,
  },
  {
    id: shortid(),
    name: 'Messenger',
    url: '/',
    isActive: false,
  },
  {
    id: shortid(),
    name: 'Explore',
    url: '/',
    isActive: false,
  },
  {
    id: shortid(),
    name: 'Help Center',
    url: '/',
    isActive: false,
  },
];

const useStyles = createUseStyles({
  active: (width) => ({
    color: '#000',
    '&:after': {
      content: '""',
      background: 'red',
      width: width,
      height: '3px',
      display: 'block',
      position: 'absolute',
      bottom: 0,
    },
  }),
});

const Menu = () => {
  const [contentWidth, setContentWidth] = useState(70);
  const activeRef = useRef();
  useEffect(() => {
    setContentWidth(activeRef.current.offsetWidth);
  }, []);
  const classes = useStyles(contentWidth);
  return (
    <>
      <div>
        <ul className='flex gap-5'>
          {listItems.map((item, index) => (
            <li
              key={item.id}
              className={`text-xl font-normal 
              text-gray-500 hover:text-black 
              font-sans-serif transition-colors duration-300 ${
                item.isActive ? classes.active : ''
              }`}
              ref={item.isActive ? activeRef : null}
            >
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
