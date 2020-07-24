import React, { Component } from "react";
import Footer from "./Footer";
import axios from "axios";
import "../App.css";
import Pagination from "react-js-pagination";

export default class Dashboard extends Component {
  state = {
    data: [],
    currentPage: "" || 1,
    TotalCount: 0,
  };

  getData = async (page) => {
    await axios
      .get(
        `https://api.github.com/search/users?q=location:bangalore&&page=${page}&&per_page=20`
      )
      .then((res) => {
        this.setState({ data: res.data.items });
        this.setState({ TotalCount: res.data.total_count });
      })
      .catch((err) => err);
  };

  componentDidMount = async () => {
    await this.getData(this.state.currentPage);
  };
  changeCurrentPage = async (numpage) => {
    await this.setState({ currentPage: numpage });
    console.log(this.state.currentPage);
    await this.getData(numpage);
  };
  render() {
    return (
      <div>
        <div className="grid">
          {this.state.data.map((item, i) => {
            return (
              <div className="card" style={{ width: "18rem" }} key={i}>
                <img
                  className="card-img-top"
                  src={item.avatar_url}
                  alt="Card cap"
                />
                <div className="card-body">
                  <a href={item.html_url} className="btn btn-success">
                    Github
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="page">
          <Pagination
            activePage={this.state.currentPage}
            itemsCountPerPage={20}
            totalItemsCount={this.state.TotalCount}
            pageRangeDisplayed={7}
            onChange={this.changeCurrentPage}
            prevPageText="prev"
            nextPageText="next"
            firstPageText="first"
            lastPageText="last"
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}
