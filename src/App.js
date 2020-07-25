import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
        <Footer />
      </div>
    );
  }
}
