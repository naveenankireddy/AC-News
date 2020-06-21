import React from "react";
import Img1 from "../styles/images/ac2.png";
const Searchbar = (props) => (
  <div className="search-border">
      <div>
      <img className="logo" src={Img1} />
    <h3>News</h3>
      </div>
    <div className="input-bar">
        <label for="input">We Report, You Decide!</label><br />
      <input
        type="text"
        placeholder="Search News!"
        onChange={(e) => props.handleSearchbar(e.target.value)}
      />
    </div>
  </div>
);

export default Searchbar;
