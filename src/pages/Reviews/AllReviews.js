import React from 'react';
import { ALL_REVIEW_DATA } from './data';
import EmptyReviews from './EmptyReviews';
import Review from './Review';
const AllReviews = () => {
  if (ALL_REVIEW_DATA.length === 0) {
    return <EmptyReviews />;
  }
  return (
    <div className='mt-10'>
      <div className='custom-container'>
        <div className='flex'>
          <div className='w-9/12'>
            {ALL_REVIEW_DATA.slice(0, 5).map((item) => (
              <Review
                key={item.id}
                title={item.title}
                feedback={item.feedback}
                username={item.username}
                user_avatar={item.user_avatar}
                rating={item.rating}
                createdAt={item.createdAt}
              />
            ))}
          </div>
          <div className='w-3/12'>
            <h2>titl</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
