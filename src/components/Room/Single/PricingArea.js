import React from 'react';
import shortid from 'shortid';

const pricingItems = [
  {
    id: shortid(),
    name: '$35 × 2 nights',
    price: 70.0,
  },
  {
    id: shortid(),
    name: 'Cleaning Fee',
    price: 25.0,
  },
  {
    id: shortid(),
    name: 'Service Fee',
    price: 35.0,
  },
];

const PricingArea = () => {
  return (
    <div>
      <div className='py-1'>
        <h2 className='text-xl font-medium mb-4 '>Price Breakdown</h2>
        <ul>
          {pricingItems.map((item) => (
            <li
              key={item.id}
              className='flex justify-between text-gray-700 mb-2'
            >
              <p className='font-normal'>{item.name}</p>
              <p className='font-light'>
                {'$'}
                {item.price.toFixed(2)}
              </p>
            </li>
          ))}

          <li className='font-bold flex justify-between text-gray-700 text-xl'>
            <p>Total</p>
            <p>$130.00</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PricingArea;
