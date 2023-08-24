import React, { useState } from 'react';
import { PaginationStyle } from './index.style';
import { Box } from '@mui/material';
import { off } from 'process';

type PaginationComponentProps = {
  setPageNumber: (currentNumber: number) => void;
  pageNumber: number;
  totalNumber: number;
} 

export const PaginationComponent: React.FC<PaginationComponentProps> = (props) => {
  const { setPageNumber, pageNumber, totalNumber } = props;
  const pageSize = 10;
  const startNum = (pageNumber - 1) * pageSize + 1;
  let endNum;
  if ( (startNum - 1 + pageSize) < totalNumber ) {
    endNum = startNum + pageSize - 1;
  } else {
    endNum = (totalNumber - startNum) + startNum;
  }

  return (
    <PaginationStyle>
      <Box
        onClick={() => {
          setPageNumber(pageNumber - 1 <= 0 ? 1 : pageNumber - 1);
        }}
        className="pagination-button"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="14"
            cy="14"
            r="13.5"
            stroke={pageNumber <= 1 ? "#E6E9EB" : "#2869FF"}
          />
          <path
            d="M15.5 10L12 13.5L15.5 17"
            stroke={pageNumber <= 1 ? "#AAABAB" : "#2869FF"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
      <Box className='pagination-context'>
        {startNum}-{endNum} of {totalNumber}
      </Box>
      <Box
        onClick={() => {
          setPageNumber(
            Math.ceil(totalNumber / pageSize) > pageNumber ? pageNumber + 1 : pageNumber
          );
        }}
        className="pagination-button"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 18L16 14.5L12.5 11"
            stroke={Math.ceil(totalNumber / pageSize) > pageNumber ? "#2869FF" : "#AAABAB" }
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="14"
            cy="14"
            r="13.5"
            transform="rotate(-180 14 14)"
            stroke={Math.ceil(totalNumber / pageSize) > pageNumber ? "#2869FF" : "#E6E9EB" }
          />
        </svg>
      </Box>
    </PaginationStyle>
  )
}