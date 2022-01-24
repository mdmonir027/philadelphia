import React, { useState } from 'react';
import shortid from 'shortid';

const ApartmentType = () => {
  const [items, setItems] = useState([
    {
      id: shortid(),
      checked: false,
      name: 'Hotel Room',
      count: 500,
    },
    {
      id: shortid(),
      checked: true,
      name: 'Entire Apartment',
      count: 900,
    },
    {
      id: shortid(),
      checked: false,
      name: 'Private Rooms',
      count: 1300,
    },
    {
      id: shortid(),
      checked: false,
      name: 'Shared Rooms',
      count: 340,
    },
    {
      id: shortid(),
      checked: false,
      name: 'Villas',
      count: 10,
    },
    {
      id: shortid(),
      checked: false,
      name: 'Guest Houses',
      count: 753,
    },
  ]);

  const onChangeHandler = (id, e) => {
    const value = e.target.checked;
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          item.checked = value;
        }
        return item;
      });
    });
  };

  return (
    <div>
      <h4 className='text-2xl font-medium text-primary-black mb-3'>
        Apartment Type{' '}
      </h4>

      <ul>
        {items.map((item) => (
          <li
            className={`flex justify-between mb-2 ${
              item.checked ? '' : 'opacity-70'
            }`}
          >
            <div className='flex gap-3 items-center'>
              <input
                type='checkbox'
                name=''
                id=''
                className={`accent-primary text-2xl transform scale-125 cursor-pointer ${
                  item.checked ? '' : 'opacity-70'
                }`}
                checked={item.checked}
                onChange={(e) => onChangeHandler(item.id, e)}
              />
              <p className={`flex-1 ${item.checked ? 'font-semibold' : ''}`}>
                {item.name}
              </p>
            </div>
            <p className={`${item.checked ? 'font-semibold' : ''}`}>
              {item.count}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApartmentType;
