import React, { useState } from 'react';
import shortid from 'shortid';

const Amenities = () => {
  const [items, setItems] = useState([
    {
      id: shortid(),
      checked: false,
      name: 'Wifi',
      count: 1500,
    },
    {
      id: shortid(),
      checked: false,
      name: 'Free Parking',
      count: 300,
    },
    {
      id: shortid(),
      checked: false,
      name: 'Eating',
      count: 2900,
    },
    {
      id: shortid(),
      checked: false,
      name: 'Washer',
      count: 50,
    },
    {
      id: shortid(),
      checked: false,
      name: 'Essentials',
      count: 5000,
    },
    {
      id: shortid(),
      checked: false,
      name: 'Dishes and Silverware',
      count: 700,
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
      <h4 className='text-2xl font-medium text-primary-black mb-4 mt-8'>
        Amenities
      </h4>

      <ul>
        {items.map((item) => (
          <li
            className={`flex justify-between mb-2 ${
              item.checked ? '' : 'opacity-70'
            }`}
            key={item.id}
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

export default Amenities;
