import React from "react";
import { useContextValue } from '../../context/paginationContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import './style.css';
function Pagination() {
  const {
    currentPage,
    handleNextIcon,
    handlePreviousIcon,
    handleNext,
    handlePrevious,
  } = useContextValue();

  return (
    <div className="pagination">
      {" "}
      {currentPage !== 1 && (
        <>
          <div className="prev" onClick={() => handlePreviousIcon()}>
            <FontAwesomeIcon className="icon" icon={faAngleLeft} />
          </div>
        </>
      )}
      {currentPage > 1 && (
        <>
          {currentPage > 4 && (
            <>
              <div className="first" onClick={(e) => handlePrevious(e)}>
                1
              </div>
              <span className="dots">. . .</span>
            </>
          )}

          {currentPage - 2 !== 0 && (
            <div onClick={(e) => handlePrevious(e)}>{currentPage - 2}</div>
          )}

          <div onClick={(e) => handlePrevious(e)}>{currentPage - 1}</div>
        </>
      )}
      <div className="currentPage">{currentPage}</div>
      {currentPage < 75 && (
        <>
          {" "}
          <div onClick={(e) => handleNext(e)}>{currentPage + 1}</div>
          <div onClick={(e) => handleNext(e)}>{currentPage + 2}</div>
          <span className="dots">. . .</span>
        </>
      )}
      {currentPage < 78 && (
        <div className="last" onClick={(e) => handleNext(e)}>
          78
        </div>
      )}
      {currentPage !== 78 && (
        <div className="next" onClick={() => handleNextIcon()}>
          <FontAwesomeIcon className="icon" icon={faAngleRight} />
        </div>
      )}
    </div>
  );
}

export default Pagination;
