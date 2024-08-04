import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div className="search-btn-component">
        <i class="close bi bi-x-lg"></i>
        <form action="">
          <input type="text" placeholder="Type to search " />
          <i className=" search bi bi-search"></i>
        </form>
      </div>
    );
  }
}

export default Search;
