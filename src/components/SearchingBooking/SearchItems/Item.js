import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ tittle, list }) => {
  return (
    <div className='mb-10'>
      <ul>
        <li className='text-gray-600 mb-4'>{tittle}</li>
        {list.map((item) => (
          <li
            key={item.id}
            className='text-black mb-4 text-lg font-medium hover:text-gray-800'
          >
            <Link to={item.url}>{item.value}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
