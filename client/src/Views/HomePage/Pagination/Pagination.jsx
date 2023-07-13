import React from "react";

const Pagination = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav className="pagination">
      {currentPage > 1 && (
        <button className="page-button" onClick={handlePrevPage}>
          Prev
        </button>
      )}
      {currentPage < totalPages && (
        <button className="page-button" onClick={handleNextPage}>
          Next
        </button>
      )}
    </nav>
  );
};

export default Pagination;
