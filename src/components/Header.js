import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-info">
        <h5>Github User Search Application</h5>
        <a
          className="btn btn-danger btn-sm"
          href="https://userslistofgithub.netlify.app/"
        >
          Live View
        </a>
      </nav>
    );
  }
}
