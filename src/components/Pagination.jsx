const Pagination = ({ pageNo, setPageNo }) => {
  const prevThree = Array.from({ length: 3 }, (_, idx) => pageNo - 1 - idx)
    .filter((val) => val > 0)
    .reverse();

  const nextThree = Array.from({ length: 4 }, (_, idx) => pageNo + idx).filter(
    (val) => val < 11
  );

  // console.log(prevThree);
  // console.log(nextThree)

  const paginationArray = [...prevThree, ...nextThree];

  //   console.log(paginationArray);

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  const handlePrev = () => {
    setPageNo(pageNo - 1);
  };
  return (
    <div className="pagination-container">
      <div className="pagination">
        {pageNo > 1 && (
          <button className="" onClick={handlePrev}>
            {"<"}
          </button>
        )}
        {paginationArray.map((num, idx) => (
          <button
            key={idx}
            className={`${num === pageNo ? "active" : ""}`}
            onClick={() => setPageNo(num)}
          >
            {num}
          </button>
        ))}
        {pageNo <= 6 && (
          <button className="" onClick={handleNext}>
            {">"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
