import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const maxPageNumbersToShow = 6;

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const startPage = Math.max(
    currentPage - Math.floor(maxPageNumbersToShow / 2),
    1
  );
  const endPage = Math.min(startPage + maxPageNumbersToShow - 1, totalPages);

  const displayedPages = pageNumbers.slice(startPage - 1, endPage);

  return (
    <nav className="flex justify-center my-4 w-full">
      <ul className="flex items-center gap-2">
        {currentPage > 1 && (
          <li>
            <button
              onClick={() => paginate(currentPage - 1)}
              className="p-3 rounded-full  hover:bg-blue-500 hover:text-white  transition-colors duration-200"
            >
              <IoIosArrowBack className="text-lg" />
            </button>
          </li>
        )}

        {displayedPages.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                number === currentPage
                  ? "bg-blue-700 text-white"
                  : "bg-blue hover:text-white  hover:bg-blue-600 transition-colors duration-200"
              }`}
            >
              {number}
            </button>
          </li>
        ))}

        {currentPage < totalPages && (
          <li>
            <button
              onClick={() => paginate(currentPage + 1)}
              className="p-3 rounded-full  hover:bg-blue-500 hover:text-white  transition-colors duration-200"
            >
              <IoIosArrowForward className="text-lg" />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
