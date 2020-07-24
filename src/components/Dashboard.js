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
    setInputValue: "",
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
    console.log(this.state.data);
  };
  changeCurrentPage = async (numpage) => {
    await this.setState({ currentPage: numpage });
    console.log(this.state.currentPage);
    await this.getData(numpage);
  };
  changeHandler = (e) => {
    this.setState({ setInputValue: e.target.value });
    console.log(this.state.setInputValue);
  };
  render() {
    return (
      <div>
        <div className="search-input mt-3">
          <input
            className="border-3 p-2 w-1/6"
            type="text"
            placeholder="Search for a user"
            onChange={this.changeHandler}
          />
        </div>
        <br />

        <div className="grid">
          {this.state.data.map((item, i) => {
            return (
              <div className="card" style={{ width: "18rem" }} key={i}>
                <img
                  className="card-img-top"
                  src={item.avatar_url}
                  alt="Card cap"
                />
                <div className="card-body d-flex">
                  <a href={item.html_url} className="btn btn-info btn-sm  mr-3">
                    Github
                  </a>
                  &nbsp;
                  <strong>
                    {" "}
                    <p>{item.login.toUpperCase()}</p>
                  </strong>
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
            // firstPageText="first"
            // lastPageText="last"
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
