import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";

function MovieTile(props) {
  return (
    <div className="col-lg-2 tile">
      <div className="movieTileImg">
        <img src={props.data["Poster"]} alt="" className="moviePoster" />
      </div>
      <div className="movieTileSpan">
        <span
          className="tileText"
          style={{ cursor: "pointer" }}
          onClick={props.onClick}
        >
          {props.data["Title"]}
        </span>
        <span
          className="tileText"
          style={{ cursor: "pointer", display: "none" }}
          onClick={props.onClick}
        >
          {props.data["imdbID"]}
        </span>
      </div>
    </div>
  );
}

export default MovieTile;
