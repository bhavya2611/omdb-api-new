import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center" style={{ padding: 0 }}>
          <div className="layout col-12">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Layout;
