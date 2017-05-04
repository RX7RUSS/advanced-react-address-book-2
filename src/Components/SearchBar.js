import React from "react";
import PropTypes from "prop-types";

function SearchBar(props) {
  return (
    <form>
      <input type="text" name="query" onChange={(event) => {
      props.handleSearchBarChange()}} />
    </form>
  );
}

export default SearchBar;
