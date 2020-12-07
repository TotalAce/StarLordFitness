import React from "react";
import './style.css'

function Search(props) {
  return (
    <div className="form-group search-bar">
      <input
        {...props}
        onChange={props.handleInputChange}
        onKeyDown={props.onKeyDown}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        autoFocus
      />
    </div>
  );
}

export default Search;
