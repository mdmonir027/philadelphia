import React, { useEffect, useState } from 'react';
import AllItems from './AllItems';
import EmptyItems from './EmptyItems';
import Header from './Heading';
import Pagination from './Pagination';
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const ITEMS = [
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    image:
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Charming and comfortable house',
    status: 0,
    subTitle: 'Entire apartment of Philadelphia',
    utility: ['1 bed', '2 bed', '3 guest'],
    price: 24,
    text: '8 night',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    image:
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Hideaway tent with pool and tub',
    status: -1,
    subTitle: 'Entire apartment of Philadelphia',
    utility: ['1 bed', '2 bed', '3 guest'],
    price: 24,
    text: '8 night',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    image:
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Charming and comfortable house',
    status: 0,
    subTitle: 'Entire apartment of Philadelphia',
    utility: ['1 bed', '2 bed', '3 guest'],
    price: 24,
    text: '8 night',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    image:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Tiny house at Gora Gut',
    status: 1,
    subTitle: 'Entire apartment of Philadelphia',
    utility: ['1 bed', '2 bed', '3 guest'],
    price: 24,
    text: '8 night',
  },

  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    image:
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'House with Kazbegi landscapes',
    status: 1,
    subTitle: 'Entire apartment of Philadelphia',
    utility: ['1 bed', '2 bed', '3 guest'],
    price: 24,
    text: '8 night',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    image:
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'House with Langkavi beaches',
    status: 0,
    subTitle: 'Entire apartment of Philadelphia',
    utility: ['1 bed', '2 bed', '3 guest'],
    price: 24,
    text: '8 night',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    image:
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Hideaway tent with pool and tub',
    status: 0,
    subTitle: 'Entire apartment of Philadelphia',
    utility: ['1 bed', '2 bed', '3 guest'],
    price: 24,
    text: '8 night',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    image:
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Charming and comfortable house',
    status: 0,
    subTitle: 'Entire apartment of Philadelphia',
    utility: ['1 bed', '2 bed', '3 guest'],
    price: 24,
    text: '8 night',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    image:
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Hideaway tent with pool and tub',
    status: -1,
    subTitle: 'Entire apartment of Philadelphia',
    utility: ['1 bed', '2 bed', '3 guest'],
    price: 24,
    text: '8 night',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    image:
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Charming and comfortable house',
    status: 0,
    subTitle: 'Entire apartment of Philadelphia',
    utility: ['1 bed', '2 bed', '3 guest'],
    price: 24,
    text: '8 night',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    image:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Tiny house at Gora Gut',
    status: 1,
    subTitle: 'Entire apartment of Philadelphia',
    utility: ['1 bed', '2 bed', '3 guest'],
    price: 24,
    text: '8 night',
  },

  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    image:
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'House with Kazbegi landscapes',
    status: 1,
    subTitle: 'Entire apartment of Philadelphia',
    utility: ['1 bed', '2 bed', '3 guest'],
    price: 24,
    text: '8 night',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    image:
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'House with Langkavi beaches',
    status: 0,
    subTitle: 'Entire apartment of Philadelphia',
    utility: ['1 bed', '2 bed', '3 guest'],
    price: 24,
    text: '8 night',
  },
  {
    date: {
      from: randomDate(new Date(2020, 0, 1), new Date()),
      to: randomDate(new Date(2020, 0, 1), new Date()),
    },
    image:
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Hideaway tent with pool and tub',
    status: 0,
    subTitle: 'Entire apartment of Philadelphia',
    utility: ['1 bed', '2 bed', '3 guest'],
    price: 24,
    text: '8 night',
  },
];
const ApartmentsContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(ITEMS);
  }, []);

  const [filteredItems, setFilteredItems] = useState([]);

  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(4);
  // totalPage count
  useEffect(() => {
    setTotalPage(Math.ceil(items.length / itemPerPage));
  }, [items, itemPerPage]);

  useEffect(() => {
    const slicedItems = items.slice(
      itemPerPage * (currentPage - 1),
      itemPerPage * currentPage
    );
    setFilteredItems(slicedItems);
  }, [currentPage, itemPerPage, items]);

  if (items.length < 0) {
    return <EmptyItems />;
  }

  return (
    <div className='my-10'>
      <div className='custom-container'>
        <Header />
        <div className='mt-5'>
          <AllItems
            items={filteredItems}
            title={randomDate(new Date(2020, 0, 1), new Date())}
          />
        </div>
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ApartmentsContainer;
