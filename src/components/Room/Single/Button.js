import React from 'react';
import {
  FaAddressBook,
  FaCommentAlt,
  FaFlag,
  FaQuestionCircle,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import shortid from 'shortid';

const allButtons = [
  {
    id: shortid(),
    url: '/',
    icon: FaAddressBook,
    text: 'Resolution center',
  },
  {
    id: shortid(),
    url: '/',
    icon: FaQuestionCircle,
    text: 'Help center',
  },
  {
    id: shortid(),
    url: '/',
    icon: FaFlag,
    text: 'Contact Host',
  },
  {
    id: shortid(),
    url: '/',
    icon: FaCommentAlt,
    text: 'Report Host',
  },
];

const Buttons = () => {
  return (
    <div className='buttons mt-4'>
      <ul className='flex gap-3 flex-wrap'>
        {allButtons.map((item) => (
          <Button
            key={item.id}
            Icon={item.icon}
            url={item.url}
            text={item.text}
          />
        ))}
      </ul>
    </div>
  );
};

const Button = ({ Icon, url, text }) => (
  <li className='bg-gray-200 text-gray-800 px-4 py-2 rounded-md '>
    <Link to={url} className='flex items-center gap-x-2 text-sm'>
      <Icon /> <span>{text}</span>
    </Link>
  </li>
);

export default Buttons;
