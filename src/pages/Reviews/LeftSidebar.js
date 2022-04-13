import React, { useMemo } from 'react';
import { FaStar } from 'react-icons/fa';

const LeftSidebar = ({ reviews }) => {
  const { positive, negative, neutral, average } = useMemo(() => {
    const positive =
      (reviews.filter((item) => item.rating >= 4).length * 100) /
      reviews.length;

    const neutral =
      (reviews.filter((item) => item.rating < 4 && item.rating >= 3).length *
        100) /
      reviews.length;

    const negative =
      (reviews.filter((item) => item.rating < 3).length * 100) / reviews.length;

    const average = (
      reviews.map((item) => item.rating).reduce((a, c) => a + c, 0) /
      reviews.length
    ).toFixed(2);

    return { positive, negative, neutral, average };
  }, [reviews]);

  return (
    <div className='mr-3'>
      <div className='bg-gray-100 p-4 pb-20 rounded-md '>
        <div className=''>
          <div className='flex gap-2 items-center  '>
            <FaStar className='text-primary text-2xl' />
            <p className='font-bold text-3xl text-primary-black'>{average}</p>
          </div>
          <p className='text-primary-black'>
            Avg. score based on {reviews.length} reviews
          </p>
        </div>
        <hr className='my-8' />
        <div>
          <Item
            title={'Positive'}
            subTitle='4 stars and above'
            percentage={positive}
          />
          <Item
            title='Neutral'
            subTitle='3 stars and above'
            percentage={neutral}
          />
          <Item
            title='Negative'
            subTitle='under 2 star'
            percentage={negative}
          />
        </div>
      </div>
    </div>
  );
};

const Item = ({ title, subTitle, percentage }) => {
  return (
    <div className='flex justify-between items-center mb-4'>
      <div>
        <h4 className='text-xl font-medium text-primary-black'>{title}</h4>
        <p className='text-sm text-primary-black'>{subTitle}</p>
      </div>
      <div className='text-right'>
        <h4 className='text-lg mb-1 font-medium'>{percentage}%</h4>
        <div className='w-16'>
          <div class='w-full bg-green-500 rounded-full h-1 dark:bg-gray-700'>
            <div
              class='bg-gray-200 h-1 rounded-full'
              style={{ width: 100 - percentage + '%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
