import React from 'react';

const FooterMenuSection = ({ title, items }) => {
  return (
    <div>
      <h2 className='font-semibold text-xl mb-5'>{title}</h2>
      <ul className=''>
        {items.map((item) => (
          <li
            key={item.id}
            className='text-gray-500 mb-3 hover:text-black transition-colors duration-500 '
          >
            <a href={item.url}>{item.value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenuSection;
