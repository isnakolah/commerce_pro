import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const onChange = ({ target }) => {
    setSearch(target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    console.log(...search, search);
  };
  return (
    <div>
      <form className="form-inline my-2 my-lg-0" onSubmit={onSubmit}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={onChange}
          value={search}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0 rounded"
          type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
