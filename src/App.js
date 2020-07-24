import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
      </div>
    );
  }
}
