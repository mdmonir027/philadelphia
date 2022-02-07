import React from 'react';
import Item from './Item';
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const dateFormate = (date) => {
  return new Date(date).toLocaleDateString('en-US', options);
};
const AllItems = ({ items, title }) => {
  return (
    <div className='mb-6'>
      <p className='mb-4'>{dateFormate(title)}</p>
      <div>
        {items.map((item) => (
          <Item
            key={Math.random()}
            dateFrom={item.date.from}
            dateTo={item.date.to}
            apartmentImage={item.apartmentImage}
            title={item.title}
            paymentStatus={item.paymentStatus}
            userImage={item.userImage}
          />
        ))}
      </div>
    </div>
  );
};

export default AllItems;
