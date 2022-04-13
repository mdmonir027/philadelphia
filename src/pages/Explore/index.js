import React from 'react';
import { FaArrowRight, FaSearch, FaStar } from 'react-icons/fa';
import { createUseStyles } from 'react-jss';
import shortid from 'shortid';

const Explore = () => {
  const classes = useStyles();
  return (
    <div className='my-20'>
      <div className='mb-10'>
        <div className=' custom-container'>
          <h2 className='text-2xl font-semibold mb-2'>
            Get Inspiration for your next trip
          </h2>
          <div className='md:flex flex-wrap gap-y-3'>
            {items.map((item) => (
              <div className='w-full mb-2 md:w-1/2 lg:w-1/3 xl:w-1/4 md:pr-4  '>
                <div
                  className={`shadow-md px-4 py-3 flex w-full items-center cursor-pointer hover:shadow-xl  ${classes.item} transition-all duration-500 rounded`}
                >
                  <div className='flex-1'>
                    <div className='flex gap-3'>
                      <div className='w-20 h-14 rounded-md overflow-hidden'>
                        <img
                          src={item.img}
                          alt={item.title}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div>
                        <h3 className='font-semibold '>{item.title}</h3>
                        <p className=''>{item.text}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <FaArrowRight
                      className={`text-primary opacity-0 icon transition-all duration-300`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='mb-10'>
        <div className='custom-container'>
          <h2 className='text-2xl font-semibold mb-6'>
            Popular apartments near you
          </h2>
          <div>
            <div className='flex'>
              {CARD_ITEMS.slice(0, 3).map((item) => (
                <div className='w-1/3'>
                  <CardItem
                    key={item.id}
                    price={item.price}
                    rating={item.rating}
                    title={item.title}
                    utility={item.utility}
                    image={item.image}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='mt-10'>
            <button className='flex bg-primary text-white px-5 py-3 justify-center gap-x-2 rounded-md'>
              <FaSearch className='mt-1' />
              <p>Explore nearby destinations</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const useStyles = createUseStyles({
  item: {
    '&:hover .icon': {
      opacity: 1,
    },
  },
});
const useStyles2 = createUseStyles({
  imageMain: (image) => ({
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }),
  dot: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 7,
    '&:before': {
      content: '""',
      display: 'inline-block',
      width: '5px',
      height: '5px',
      background: '#0007',
      borderRadius: '50%',
    },
  },
});
const CardItem = ({ price, rating, title, utility = [], image }) => {
  const classes = useStyles2(image);
  return (
    <div className='pr-4 w-full mb-4 hover:cursor-pointer'>
      <div className=''>
        <div
          className={`${classes.imageMain} h-40 lg:h-60 rounded overflow-hidden px-4 py-5 flex justify-between items-start border mb-2`}
        >
          <div className='flex justify-between items-center bg-white px-3 py-1 rounded-md gap-2'>
            <FaStar className='text-primary' />
            <p className='text-xl text-primary-black'>{rating}</p>
          </div>
          <div className='flex justify-between items-center bg-white px-3 py-1 rounded-md gap-2'>
            <p className='text-xl text-primary-black'>
              {'$'}
              {price}
            </p>
          </div>
        </div>
        <h2 className='text-primary-black text-xl font-bold mb-2'>{title}</h2>
        <ul className='flex flex-wrap gap-2'>
          {utility.map((item, i) => (
            <li
              key={Math.random()}
              className={`${
                i !== 0 ? classes.dot : ''
              } text-primary-black font-light`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Explore;

const items = [
  {
    id: Math.random(),
    title: 'Batumi',
    text: '$40/night avg.',
    img: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: Math.random(),
    title: 'Borjomi',
    text: '$40/night avg.',
    img: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: Math.random(),
    title: 'Pasanauri',
    text: '$40/night avg.',
    img: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: Math.random(),
    title: "Mest'ia",
    text: '$40/night avg.',
    img: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: Math.random(),
    title: 'Ambrolauri',
    text: '$40/night avg.',
    img: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: Math.random(),
    title: 'Sighnaghi',
    text: '$40/night avg.',
    img: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

const CARD_ITEMS = [
  {
    id: shortid(),
    price: 35,
    rating: '4.91',
    title: 'Charming and comfortable house',
    utility: ['2 bed', '1 bedroom', '2 beds'],
    image:
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: shortid(),
    price: 42,
    rating: '4.88',
    title: 'House with Kazbegi landscapes',
    utility: ['2 bed', '1 bedroom', '2 beds'],
    image:
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: shortid(),
    price: 29,
    rating: '4.65',
    title: 'Hideaway tent with pool and tub',
    utility: ['2 bed', '1 bedroom', '2 beds'],
    image:
      'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: shortid(),
    price: 38,
    rating: '4.75',
    title: 'Unique glamping experience',
    utility: ['2 bed', '1 bedroom', '2 beds'],
    image:
      'https://images.pexels.com/photos/813692/pexels-photo-813692.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: shortid(),
    price: 38,
    rating: '4.75',
    title: 'Baumhaus hof Grove-Dittmer',
    utility: ['2 bed', '1 bedroom', '2 beds'],
    image:
      'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];
