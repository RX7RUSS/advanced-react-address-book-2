import React from "react";
import PropTypes from "prop-types";



function SearchBar(props) {
  return (
    <form>
      <input type="text" name="query" onChange={(event) => props.onSearchBarChange(event)} />
    </form>
  );
}

SearchBar.propTypes = {
  onSearchBarChange: PropTypes.func.isRequired
};

export default SearchBar;
