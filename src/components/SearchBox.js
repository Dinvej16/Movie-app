import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-auto">
      <input
        className="form-contol rounded"
        placeholder="Search"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
