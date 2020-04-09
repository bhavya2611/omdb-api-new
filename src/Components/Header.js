import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="row" style={{ padding: 0 }}>
        <div
          className="col-12 header"
          style={{ textAlign: "center", display: "flex" }}
        >
          <div className="headerText col-12">
            <span>OMDB MOVIE SEARCH</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
