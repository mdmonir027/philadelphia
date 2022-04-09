import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import {
  FaCity,
  FaEye,
  FaLaptop,
  FaRegBell,
  FaShieldAlt,
  FaUserCircle,
  FaUserCog,
} from 'react-icons/fa';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import { routes } from '../../routes';
const classNames = {
  wrapper:
    'w-full mb-2 shadow-md hover:shadow-lg cursor-pointer gap-3 items-center flex box-border px-4  py-3 rounded-md transition-colors duration-300',
  name: 'text-base font-bold text-primary-black',
  subTitle: 'text-gray-600 font-light text-sm',
  icon: 'bg-gray-100 flex justify-center items-center p-3 rounded-md text-xl text-gray-400 icon transition-colors duration-300',
};

const menuItems = [
  {
    id: shortid(),
    icon: FaUserCircle,
    name: 'Account information ',
    subTitle: 'Profile foto, name &amp; language',
    url: routes.settings.info,
  },
  {
    id: shortid(),
    icon: FaLaptop,
    name: 'Security ',
    subTitle: 'Your last activity and credentials',
    url: routes.settings.security,
  },
  {
    id: shortid(),
    icon: FaShieldAlt,
    name: 'Login details ',
    subTitle: 'Password & security questions',
    url: routes.settings.login,
  },
  {
    id: shortid(),
    icon: AiFillDollarCircle,
    name: 'Billing ',
    subTitle: 'Setup payment methods',
    url: routes.settings.billing,
  },
  {
    id: shortid(),
    icon: FaRegBell,
    name: 'Notifications ',
    subTitle: 'Set your email notifications',
    url: routes.settings.notifications,
  },
  {
    id: shortid(),
    icon: FaEye,
    name: 'Privacy',
    subTitle: 'Connected apps and services',
    url: routes.settings.privacy,
  },
  {
    id: shortid(),
    icon: FaUserCog,
    name: 'Global Preferences ',
    subTitle: 'Setup currency and language',
    url: routes.settings.globalPreference,
  },
  {
    id: shortid(),
    icon: FaCity,
    name: 'Business Account',
    subTitle: 'Switch your account type',
    url: routes.settings.business,
  },
];

const useStyles = createUseStyles({
  wrapper: {
    '&:hover .icon': {
      color: '#e65d55',
      background: '#fae8e6',
    },
  },
});

const Menus = () => {
  return (
    <div className='mt-10'>
      <div className='flex flex-wrap gap-y-6'>
        {menuItems.map((menu) => (
          <Menu
            key={Math.random()}
            url={menu.url}
            name={menu.name}
            subTitle={menu.subTitle}
            Icon={menu.icon}
          />
        ))}
      </div>
    </div>
  );
};

const Menu = ({ url, name, subTitle, Icon }) => {
  const classes = useStyles();
  return (
    <div className='px-4 w-full md:w-1/2 lg:w-1/3 2xl:w-1/4'>
      <Link to={url} className={`${classNames.wrapper} ${classes.wrapper} `}>
        <div className={classNames.icon}>
          <Icon />
        </div>
        <div>
          <p className={classNames.name}>{name}</p>
          <p className={classNames.subTitle}>{subTitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default Menus;
