import React, { useState } from "react";

import "./style.css";

// const api = Axios.create({
//   baseURL: "https://need-based-stay.herokuapp.com/filter",
// });

export default function SearchLocation() {
  const [search, setSearch] = useState();
  const [searchValue, setSearchValue] = useState();

  // console.log(searchValue);

  function handleClick() {
    setSearchValue(search);
  }

  return (
    <div className="search-component">
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={handleClick}
        >
          Search
        </button>
      </form>
    </div>
  );
}
