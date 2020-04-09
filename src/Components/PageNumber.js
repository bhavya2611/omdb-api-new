import React from "react";

const PageNumber = (props) => {
  return (
    <div className="row" style={{ padding: 0 }}>
      <div
        className="col-12 pageNumber"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <span>PageNumber: </span>
        <input
          type="number"
          min="1"
          max={(parseInt(props.data) % 10) + 1}
          className="textPageNum"
          value={props.pageNumber}
          onChange={props.onChange}
        />
        / {(parseInt(props.data) % 10) + 1}{" "}
        <button type="button" onClick={props.onClick} className="buttonPageNum">
          Go
        </button>
      </div>
    </div>
  );
};

export default PageNumber;
