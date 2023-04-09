import React from "react";
import { usePagination, DOTS } from "../../hooks/usePagination";
import clsx from "clsx";

const Pagination = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
}) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });
    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul className="flex justify-center list-none">
            {/* Left navigation arrow */}
            <li
                className={clsx(
                    { hidden: currentPage === 1 },
                    "cursor-pointer px-3 h-8 text-center mx-1 text-black flex box-border items-center tracking-tighter rounded-full leading-5 text-sm min-w-8 selection:bg-slate-500"
                )}
                onClick={onPrevious}
            >
                <div className="relative rotate-[-135deg] -translate-x-2/4 before:content-[''] before:inline-block before:w-[0.4em] before:h-[0.4em] before:border-r-[0.12em] bbefore:order-r-[rgba(0,0,0,0.87)] before:border-t-[0.12em] bbefore:order-t-[rgba(0,0,0,0.87)] before:border-solid" />
            </li>
            {paginationRange.map((pageNumber, index) => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return (
                        <li
                            // className="pagination-item dots"
                            key={`dot-${pageNumber}-${index}`}
                            className={
                                "cursor-pointer px-3 h-8 text-center mx-1 text-black flex box-border items-center tracking-tighter rounded-full leading-5 text-sm min-w-8 selection:bg-slate-500"
                            }
                        >
                            &#8230;
                        </li>
                    );
                }

                // Render our Page Pills
                // selected
                return (
                    <li
                        key={`dot-${pageNumber}-${index}`}
                        // className={classnames("pagination-item", {
                        //     selected: pageNumber === currentPage,
                        // })}
                        className={clsx(
                            {
                                [`bg-gray-500 text-white`]:
                                    pageNumber === currentPage,
                            },
                            "cursor-pointer px-3 h-8 text-center mx-1  flex box-border items-center tracking-tighter rounded-full leading-5 text-sm min-w-8 selection:bg-slate-500"
                        )}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li
                className={clsx(
                    { hidden: currentPage === lastPage },
                    "cursor-pointer px-3 h-8 text-center mx-1 text-black flex box-border items-center tracking-tighter rounded-full leading-5 text-sm min-w-8 selection:bg-slate-500"
                )}
                onClick={onNext}
            >
                <div className="cursor-pointer relative rotate-45 before:content-[''] before:inline-block before:w-[0.4em] before:h-[0.4em] before:border-r-[0.12em] bbefore:order-r-[rgba(0,0,0,0.87)] before:border-t-[0.12em] bbefore:order-t-[rgba(0,0,0,0.87)] before:border-solid" />
            </li>
        </ul>
    );
};

export default Pagination;
