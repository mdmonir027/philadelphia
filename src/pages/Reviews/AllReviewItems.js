import React from 'react';
import Review from './Review';

const AllReviewItems = ({ reviews }) => {
  return (
    <div>
      {reviews.map((item) => (
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
  );
};

export default AllReviewItems;
