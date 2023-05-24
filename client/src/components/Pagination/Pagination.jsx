import React from "react";
import style from "./Pagination.module.css"
import pageFirst from "../../assets/pageFirst.png"
import pagePrev from "../../assets/pagePrev.png"
import pageNext from "../../assets/pageNext.png"
import pageLast from "../../assets/pageLast.png"

function Pagination({ totalDogs, dogsPerPage, currentPage, setCurrentPage }) {

  const totalPages = Math.ceil(totalDogs / dogsPerPage);

  const pageNumbers = [];
  const maxPagesView = 5
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesView/2))
  let endPage = Math.min(totalPages, startPage + maxPagesView - 1)

  if(endPage - startPage + 1 < maxPagesView) startPage = Math.max(1, endPage - maxPagesView + 1)

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  
  // Specific page - Setea el estado a la pagina que le pasamos
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // Prev page
  const handlePrevPage = () => {
    if (currentPage > 1) pagination(currentPage - 1);
  };

  // Next page
  const handleNextPage = () => {
    if (currentPage < totalPages) pagination(currentPage + 1);
  };

  // First Page
  const handleFirstPage = () => {
    if(currentPage !== 1) pagination(1)
  }

  // Last Page
  const handleLastPage = () => {
    if(currentPage !== totalPages) pagination(totalPages)
  }


  return (
    <nav className={style.paginationContainer}>
      <ul className={style.ul}>

      <li className={style.li}>
          <button className={style.paginationBtnPrev} onClick={handleFirstPage} disabled={currentPage === 1}>
            <img src={pageFirst} alt="First"/>
          </button>
        </li>

        <li className={style.li}>
          <button className={style.paginationBtnPrev} onClick={handlePrevPage} disabled={currentPage === 1}>
            <img src={pagePrev} alt="Prev"/>
          </button>
        </li>

        {pageNumbers?.map((page) => (
          <li className={style.li} key={page}>
            <button className={(page === currentPage ? style.paginationBtnActive : style.paginationBtn)} onClick={() => pagination(page)}>
              {page}
            </button>
          </li>
        ))}

        <li className={style.li}>
          <button className={style.paginationBtnNext} onClick={handleNextPage} disabled={currentPage === totalPages}>
            <img src={pageNext} alt="Next"/>
          </button>
        </li>

        <li className={style.li}>
          <button className={style.paginationBtnNext} onClick={handleLastPage} disabled={currentPage === totalPages}>
            <img src={pageLast} alt="Last"/>
          </button>
        </li>

      </ul>
    </nav>
  );
}

export default Pagination;
