import React from "react";
import style from "./Pagination.module.css"

function Pagination({ totalDogs, dogsPerPage, currentPage, setCurrentPage }) {

  const totalPages = Math.ceil(totalDogs / dogsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  
  // Specific page - Setea el estado a la pagina que le pasamos
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // Prev page
  const prevHandler = () => {
    if (currentPage > 1) pagination(currentPage - 1);
  };

  // Next page
  const nextHandler = () => {
    if (currentPage < totalPages) pagination(currentPage + 1);
  };



  return (
    <nav className={style.pagination}>
      <ul className={style.ul}>

        <li className={style.li}>
          <button className={style.paginationBtnPrev} onClick={prevHandler}>
            Prev
          </button>
        </li>

        {pageNumbers?.map((page) => (
          <li className={style.li} key={page}>
            <button className={`${style.paginationBtn} ${page === currentPage && style.paginationBtnActive}`} onClick={() => pagination(page)}>
              {page}
            </button>
          </li>
        ))}

        <li className={style.li}>
          <button className={style.paginationBtnNext} onClick={nextHandler}>
            Next
          </button>
        </li>

      </ul>
    </nav>
  );
}

export default Pagination;
