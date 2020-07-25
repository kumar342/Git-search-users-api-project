import React, { Component } from "react";
import "../App.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <nav className="navbar sticky-bottom navbar-light bg-light">
          <span className="navbar-brand mx-auto">
            Developed{" "}
            <i
              className="fa fa-heart"
              style={{ fontSize: "24px", color: "red" }}
            ></i>{" "}
            by <span>Hemanth Kumar</span>
            <br />{" "}
            <span style={{ paddingLeft: "30%" }}>
              <a href="https://github.com/kumar342/Git-search-users-api-project">
                View Source
              </a>
            </span>
          </span>
        </nav>
      </div>
    );
  }
}
