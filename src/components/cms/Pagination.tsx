import ReactPaginate from "react-paginate";
import { FC } from "react";

interface PaginationProps {
  pageCount: number;
  onPageChange: (event: any) => void;
}

const Pagination: FC<PaginationProps> = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      previousLabel="<"
      nextLabel=">"
      pageRangeDisplayed={5}
      containerClassName="container"
      breakLabel="..."
    />
  );
};

export default Pagination;
