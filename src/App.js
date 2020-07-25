import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import "../node_modules/font-awesome/css/font-awesome.min.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <Dashboard />
        <Footer />
      </div>
    );
  }
}
