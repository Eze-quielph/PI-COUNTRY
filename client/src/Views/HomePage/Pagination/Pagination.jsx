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

  const handleFirstPage = () => {
    onPageChange(1);
  };

  const handleLastPage = () => {
    onPageChange(totalPages);
  };

  return (
    <nav className="pagination">
      {currentPage > 1 && (
        <>
          <button className="page-button" onClick={handleFirstPage}>
            1
          </button>
          <button className="page-button" onClick={handlePrevPage}>
            Prev
          </button>
        </>
      )}
      {currentPage < totalPages && (
        <>
          <button className="page-button" onClick={handleNextPage}>
            Next
          </button>
          <button className="page-button" onClick={handleLastPage}>
            {totalPages}
          </button>
        </>
      )}
    </nav>
  );
};

export default Pagination;
