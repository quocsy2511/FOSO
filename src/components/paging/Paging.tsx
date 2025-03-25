import ArrowLeft from "@/components/svg/ArrowLeft";
import ArrowRight from "@/components/svg/ArrowRight";
import React from "react";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Paging = ({ currentPage, onPageChange, totalPages }: PaginationProps) => {
  const pageNumbers = [];
  const showPages = 2;

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - showPages && i <= currentPage + showPages)
    ) {
      pageNumbers.push(i);
    } else if (
      (i === currentPage - showPages - 1 && currentPage > showPages + 2) ||
      (i === currentPage + showPages + 1 &&
        currentPage < totalPages - showPages - 1)
    ) {
      pageNumbers.push("...");
    }
  }

  return (
    <div className="flex items-center space-x-2 w-full justify-between">
      <button
        className="text-gray-500 hover:text-gray-700 flex items-center"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowLeft />
        <span className="ml-1 font-medium text-base text-typo-gray-5">
          Trang trước
        </span>
      </button>

      <div className="mdd:flex">
        {pageNumbers.map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              onClick={() => onPageChange(page)}
              className={`px-4 py-2 rounded-lg font-semibold text-base ${
                page === currentPage
                  ? "bg-backgroundColor-green-3 text-typo-green"
                  : "text-typo-gray-4 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ) : (
            <span key={index} className="px-2 text-gray-500">
              {page}
            </span>
          )
        )}
      </div>

      <button
        className="text-gray-500 hover:text-gray-700 flex items-center"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span className="mr-1 font-medium text-base text-typo-gray-">
          Trang kế tiếp
        </span>
        <ArrowRight />
      </button>
    </div>
  );
};

export default Paging;
