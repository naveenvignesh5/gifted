import React, { memo, useState } from "react";

import "./PaginationTab.sass";

const PaginationTab = memo(
  ({ totalPages, currentPage, pageLimit = 10, onPagePress }) => {
    const renderPageButtons = () => {
      let buttons = [];

      // 15 pages , 10 pages, 3 - 13
      let limit = pageLimit;

      if (currentPage > limit) limit = currentPage + pageLimit - 1;

      if (limit > totalPages) limit = totalPages;

      for (let i = 1; i <= limit; i += 1) {
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
          <button className="page-button">Prev</button>
          {renderPageButtons()}
          <button className="page-button">Next</button>
        </div>
      </div>
    );
  }
);

export default PaginationTab;
