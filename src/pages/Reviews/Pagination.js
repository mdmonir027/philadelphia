import React, { memo } from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Pagination = ({ totalPage, nextPage, currentPage, setCurrentPage }) => {
  return (
    <div className='pb-10 pt-4 '>
      <ul className='flex gap-1 ml-2 items-center flex-wrap'>
        {Array.from(Array(totalPage)).map((_, index) => (
          <li
            key={index}
            className={`py-2 px-4 rounded-md  hover:bg-green-500 hover:text-[#ffe4dc] hover:cursor-pointer ${
              currentPage === index + 1
                ? 'bg-green-500 text-[#ffe4dc]'
                : 'text-[#343434]'
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </li>
        ))}
        <button
          className='flex items-center gap-1 border 
          px-2 py-2 rounded-md text-gray-600 cursor-pointer 
          border-gray-200 
          hover:bg-green-500  hover:text-[#ffe4dc] 
          disabled:bg-gray-300 disabled:text-gray-600'
          onClick={nextPage}
          disabled={currentPage === totalPage}
        >
          Next <FaAngleRight />
        </button>
      </ul>
    </div>
  );
};

export default memo(Pagination);
