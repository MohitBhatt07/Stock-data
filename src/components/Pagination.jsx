import React from 'react';

const Pagination = ({ currentPage, pageCount, onPageChange, daysToShow, onDaysToShowChange }) => {
  return (
    <div className="flex flex-col items-center justify-between mt-4">
      <div className="flex items-center mb-4">
        <label htmlFor="daysToShow" className="mr-2 font-medium">
          Days to show:
        </label>
        <select
          id="daysToShow"
          value={daysToShow}
          onChange={(e) => onDaysToShowChange(parseInt(e.target.value))}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>
      <div className="flex">
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded-md mr-2 ${
              currentPage === page
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;