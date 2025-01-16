import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={(e, page) => onPageChange(page)}
      />
    </div>
  );
};

export default Pagination;
