import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Pagination = ({ totalPage, currentPage, setCurrentPage }) => {
  const nextPage = () => {
    if (currentPage !== totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  return (
    <>
      <div className='pb-10 pt-4 '>
        <ul className='flex gap-3 ml-2 items-stretch'>
          {Array.from(Array(totalPage)).map((_, index) => (
            <li
              key={index}
              className={`py-2 px-4 rounded-md  hover:bg-green-500 hover:text-white hover:cursor-pointer ${
                currentPage === index + 1
                  ? 'bg-green-500 text-[#ffe4dc]'
                  : 'text-[#343434] border'
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </li>
          ))}
          <button
            className='flex items-center gap-1 border 
          px-3 py-2 rounded-md text-gray-600 cursor-pointer 
          border-gray-200 
          hover:bg-green-500  hover:text-[#ffe4dc] 
          disabled:bg-gray-300 disabled:text-gray-600'
            onClick={nextPage}
            disabled={currentPage === totalPage}
          >
            <FaArrowRight />
          </button>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
