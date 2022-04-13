import React, { useEffect, useState } from 'react';
import AllReviewItems from './AllReviewItems';
import { ALL_REVIEW_DATA } from './data';
import EmptyReviews from './EmptyReviews';
import LeftSidebar from './LeftSidebar';
import Pagination from './Pagination';
import TopMenu from './TopMenu';
const AllReviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [filterReviews, setFilterReviews] = useState([]);
  const [reviews, setReviews] = useState([]);

  const [totalPage, setTotalPage] = useState(1);
  const [itemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    if (filterType === 'all') {
      setFilterReviews(allReviews);
      return;
    }
    if (filterType === 'positive') {
      setFilterReviews(allReviews.filter((item) => item.rating >= 4));
      return;
    }
    if (filterType === 'negative') {
      setFilterReviews(allReviews.filter((item) => item.rating < 3));
      return;
    }
    if (filterType === 'neutral') {
      setFilterReviews(
        allReviews.filter((item) => item.rating < 4 && item.rating >= 3)
      );
      return;
    }
  }, [filterType, allReviews]);

  useEffect(() => setAllReviews(ALL_REVIEW_DATA), []);
  useEffect(() => {
    setTotalPage(Math.ceil(filterReviews.length / itemPerPage));
  }, [itemPerPage, filterReviews]);

  useEffect(() => {
    setReviews(
      filterReviews.slice(
        currentPage * itemPerPage - itemPerPage,
        currentPage * itemPerPage
      )
    );
  }, [filterReviews, currentPage, itemPerPage]);

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
        <TopMenu filterType={filterType} setFilterType={setFilterType} />
        <div className='flex'>
          <div className='w-3/12'>
            <LeftSidebar reviews={allReviews} />
          </div>
          <div className='w-9/12'>
            <AllReviewItems reviews={reviews} />
            <Pagination
              totalPage={totalPage}
              nextPage={nextPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
