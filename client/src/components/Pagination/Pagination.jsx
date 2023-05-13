import React from "react";

function Pagination({ dogsPerPage, allDogs, pagination, currentPage }) {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allDogs.length / dogsPerPage); i++) {
    pageNumbers.push(i);
  }
  const previusPage = () => {
    if (currentPage > 1) {
      pagination(currentPage - 1);
    }
  };
  const nextPage = () => {
    const totalPages = Math.ceil(allDogs.length / dogsPerPage);
    if (currentPage < totalPages) {
      pagination(currentPage + 1);
    }
  };

  return (
    <nav className={style.pagination}>
      <ul className={style.ul}>
        <li className={style.li}>
          <button className={style.prev} onClick={previusPage}>
            Prev
          </button>
        </li>
        {pageNumbers?.map((number) => (
          <li className={style.li} key={number}>
            <button
              className={style.paginationbutton}
              onClick={() => pagination(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li className={style.li}>
          <button className={style.next} onClick={nextPage}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
