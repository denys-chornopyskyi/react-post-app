import React, {useMemo} from 'react';
import {getPagesArray} from "../../../utils/pages.js";

const Pagination = ({totalPages, currentPage, changePage}) => {
  const pagesArray = useMemo(() => {
    return getPagesArray(totalPages)
  }, [totalPages]);

  return (
    <div className='page__wrapper'>
      {pagesArray.map(page =>
        <span onClick={() => changePage(page)} key={page} className={currentPage === page ? 'page page__current' : 'page'}>{page}</span>)}

    </div>
  );
};

export default Pagination;