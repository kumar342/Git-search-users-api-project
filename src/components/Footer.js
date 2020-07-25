import React, { Component } from "react";
import "../App.css";

export default class Footer extends Component {
  state = {
    love: "❤️",
  };
  render() {
    return (
      <div className="footer">
        <p className="mt-5">
          Developed with {this.state.love} by Hemanth Kumar{" "}
        </p>
        <a
          className="mb-5"
          href="https://github.com/kumar342/Git-search-users-api-project"
        >
          View Source Code
        </a>
      </div>
    );
  }
}
