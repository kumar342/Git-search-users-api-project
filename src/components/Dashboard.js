import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import Pagination from "react-js-pagination";

export default class Dashboard extends Component {
  state = {
    data: [],
    currentPage: "" || 1,
    TotalCount: 0,
    search: "",
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
    await this.getData(numpage);
  };
  userChange = async (e) => {
    await this.setState({ search: e.target.value });
  };
  userSubmit = async (e) => {
    const { search } = this.state;
    const searchUser = search.split(" ").join("").toLowerCase();
    e.preventDefault();
    await axios
      .get(`https://api.github.com/users/${searchUser}`)
      .then((res) => {
        console.log(res.data);
        let userArray = [];
        userArray.push(res.data);
        this.setState({ data: userArray });
      })
      .catch((err) => err);
  };
  render() {
    return (
      <div>
        <div>
          <nav
            className="navbar navbar-expand-lg navbar-dark justify-content-between "
            style={{ backgroundColor: "#0074D9" }}
          >
            {" "}
            <h5 className="navbar-brand mr-5">Github Users</h5>
            <div className="pull-right" style={{ float: "right" }}>
              <form className="form-inline mt-1" onSubmit={this.userSubmit}>
                <i
                  className="fa fa-user-o  mr-2"
                  style={{ color: "white" }}
                ></i>
                &nbsp;
                <input
                  type="search"
                  className="form-control mr-sm-2"
                  placeholder="Enter the Github User"
                  onChange={this.userChange}
                />
                <button
                  type="submit"
                  className="btn btn-outline-light "
                  onSubmit={this.userSubmit}
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
        <div className="container">
          <br />
          {this.state.data ? (
            <div className="grid">
              {this.state.data.map((item, i) => {
                return (
                  <div className="card" key={i}>
                    <img
                      className="card-img-top"
                      src={item.avatar_url}
                      alt="Card cap"
                    />
                    <div className="card-body d-flex">
                      <a
                        href={item.html_url}
                        className="btn btn-success btn-sm  mr-3"
                      >
                        View Profile
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
          ) : (
            "No User found"
          )}
          <br />
          <br />
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
        </div>
      </div>
    );
  }
}
