import React, { memo, useState } from "react";

import "./PaginationTab.sass";

const PaginationTab = memo(
  ({ totalPages = 20, currentPage, pageLimit = 10, onPagePress }) => {
    const [startPage, updateStartPage] = useState(1);

    const onPrevPress = () => {
        if (startPage === 1) return;

        const newStartPage = startPage - pageLimit;

        if (newStartPage > 0) updateStartPage(newStartPage);
    }

    const onNextPress = () => {
        if (startPage === totalPages) return;

        const newStartPage = startPage + pageLimit;

        if (newStartPage <= totalPages) updateStartPage(newStartPage);
    }

    const renderPageButtons = () => {
      let buttons = [];

      // 15 pages , 10 pages, 3 - 13
      let limit = pageLimit;

      if (currentPage > limit) limit = currentPage + pageLimit - 1;

      if (limit > totalPages) limit = totalPages;

      limit = startPage + limit - 1;

      for (let i = startPage; i <= limit; i += 1) {
        buttons.push(
          <button
            onClick={() => onPagePress(i)}
            className={`page-button ${currentPage === i ? "is-active" : ""}`}
          >
            {i}
          </button>
        );
      }

      return buttons;
    };

    return (
      <div className="paginatin-tab">
        <div className="page-buttons-wrapper">
          <button className="page-button" onClick={onPrevPress}>Prev</button>
          {renderPageButtons()}
          <button className="page-button" onClick={onNextPress}>Next</button>
        </div>
      </div>
    );
  }
);

export default PaginationTab;
