import React from 'react';
import shortid from 'shortid';
import Item from './Item';

const items = [
  {
    id: shortid(),
    tittle: 'How to search',
    list: [
      {
        id: shortid(),
        value: 'How do I search for a place to stay?',
        url: '/',
      },
      {
        id: shortid(),
        value: 'How do I use search filters',
        url: '/',
      },
      {
        id: shortid(),
        value: 'How do I search by neighborhood?',
        url: '/',
      },
      {
        id: shortid(),
        value: 'How do I search for a place to stay when I travel for work?',
        url: '/',
      },
    ],
  },
  {
    id: shortid(),
    tittle: 'Understanding listings',
    list: [
      {
        id: shortid(),
        value: 'How do I know if a listing is available?',
        url: '/',
      },
      {
        id: shortid(),
        value: 'How do I choose what type of place to stay?',
        url: '/',
      },
      {
        id: shortid(),
        value:
          'What does pending mean in the license or number on a listing for a place to stay?',
        url: '/',
      },
      {
        id: shortid(),
        value: 'How can I tell if a listing allows pets?',
        url: '/',
      },
      {
        id: shortid(),
        value: 'What type of listings are part of monthly stays?',
        url: '/',
      },
      {
        id: shortid(),
        value: 'What are neighborhoods?',
        url: '/',
      },
    ],
  },
];

const AllItems = () => {
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} tittle={item.tittle} list={item.list} />
      ))}
    </div>
  );
};

export default AllItems;
