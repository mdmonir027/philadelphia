import React, { useEffect, useState } from 'react';
import { ALL_REVIEW_DATA } from './data';
import EmptyReviews from './EmptyReviews';
import Pagination from './Pagination';
import Review from './Review';
const AllReviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [itemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => setAllReviews(ALL_REVIEW_DATA), []);
  useEffect(() => {
    setTotalPage(Math.ceil(allReviews.length / itemPerPage));
  }, [itemPerPage, allReviews]);

  useEffect(() => {
    setReviews(
      allReviews.slice(
        currentPage * itemPerPage - itemPerPage,
        currentPage * itemPerPage
      )
    );
  }, [allReviews, currentPage, itemPerPage]);

  const nextPage = () => {
    if (currentPage !== totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  if (reviews.length === 0) {
    return <EmptyReviews />;
  }

  return (
    <div className='mt-10'>
      <div className='custom-container'>
        <div className='flex'>
          <div className='w-9/12'>
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
            <Pagination
              totalPage={totalPage}
              nextPage={nextPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
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
