import PropTypes from "prop-types";

const Pagination = ({ page, setPage, users, rowsPerPage }) => {
  //   const totalPagesArr = [];
  //   for (let i = 1; i < users.length / rowsPerPage; i++) {
  //     totalPagesArr.push(i);
  //   }

  //   const totalPagesArr = (arr) => {
  //     for (let i = 1; i < arr?.length / rowsPerPage; i++) {
  //       arr?.push(i);
  //     }

  //     return arr;
  //   };

  const handleNextPage = (arr) => {
    if (page <= arr?.length / rowsPerPage) {
      setPage((prev) => prev + 1);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  console.log(page);

  return (
    <div
      className='pagination container'
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "rgb(34, 40, 49)",
      }}
    >
      <button className='btn' onClick={handlePrevPage}>
        prev
      </button>
      <div className='pages'>
        {/* {totalPagesArr.map((num, i) => (
          <span style={{ color: "rgb(238, 238, 238)" }} key={i + 1}>
            {num}
          </span>
        ))} */}
        <span style={{ color: "rgb(238, 238, 238)" }}>{page}</span>
      </div>
      <button className='btn' onClick={() => handleNextPage(users)}>
        next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  setrowsPerPage: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.object),
  rowsPerPage: PropTypes.number,
};

export default Pagination;
