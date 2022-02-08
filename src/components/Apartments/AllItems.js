import React from 'react';
import Item from './Item';

const AllItems = ({ items }) => {
  return (
    <div className='mb-6'>
      <div>
        {items.map((item) => (
          <Item
            key={Math.random()}
            dateFrom={item.date.from}
            dateTo={item.date.to}
            image={item.image}
            title={item.title}
            status={item.status}
            subTitle={item.subTitle}
            utility={item.utility}
            price={item.price}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default AllItems;
