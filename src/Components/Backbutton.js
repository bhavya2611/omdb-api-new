import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import { Link } from "@reach/router";

class BackButton extends React.Component {
  render() {
    return (
      <div className="row ">
        <div className="col-12" style={{ textAlign: "left" }}>
          <Link to={this.props.path}>
            <button type="button" className="backbutton ">
              &larr; Back
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BackButton;
