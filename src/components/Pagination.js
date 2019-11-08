import React from "react";
import _ from "lodash";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationComp = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <Pagination aria-label="Page navigation">
      {pages.map(page => (
        <PaginationItem
          key={page}
          className={page === currentPage ? "active" : ""}
        >
          <PaginationLink href="#" onClick={() => onPageChange(page)}>
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}
    </Pagination>
  );
};

export default PaginationComp;
