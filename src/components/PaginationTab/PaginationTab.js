import React, { memo, useState } from "react";

import "./PaginationTab.sass";
import { DEFAULT_PAGE_COUNT_PER_GROUP } from "../../constants";

const PaginationTab = memo(
  ({
    totalPages,
    currentPage,
    pageLimit = DEFAULT_PAGE_COUNT_PER_GROUP,
    onPagePress,
    onPrevButtonPress,
    onNextButtonPress
  }) => {
    const [startPage, updateStartPage] = useState(1);

    const onPrevPress = () => {
      if (startPage === 1) return;

      const newStartPage = startPage - pageLimit;

      if (newStartPage > 0) {
        updateStartPage(newStartPage);
        onPrevButtonPress(newStartPage);
      }
    };

    const onNextPress = () => {
      if (startPage === totalPages) return;

      const newStartPage = startPage + pageLimit;

      if (newStartPage <= totalPages) {
        updateStartPage(newStartPage);
        onNextButtonPress(newStartPage);
      }
    };

    const renderPageButtons = () => {
      let buttons = [];

      let limit = startPage + pageLimit - 1;

      for (let i = startPage; i <= limit; i += 1) {
        buttons.push(
          <button
            key={`page_${i}`}
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
      <div className="is-hidden-mobile">
        <div className="paginatin-tab">
          <div className="page-buttons-wrapper">
            <button className="page-button" onClick={onPrevPress}>
              Prev
            </button>
            {renderPageButtons()}
            <button className="page-button" onClick={onNextPress}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default PaginationTab;
