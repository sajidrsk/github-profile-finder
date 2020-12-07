import React from "react";
import { connect } from "react-redux";

import classes from "./SortBy.module.scss";
import * as actionCreators from "../../../store/actionCreators";

const SortBy = (props) => {
  return (
    <select
      className={classes.sort_select}
      defaultValue="nameAscending"
      onChange={(e) => props.onDropDown(e)}
    >
      <option value="rankAscending">Rank Ascending</option>
      <option value="rankDescending">Rank Descending</option>
      <option value="nameAscending">Name A-Z</option>
      <option value="nameDescending">Name Z-A</option>
    </select>
  );
};

const mapStateToProps = (state) => {
  return {
    repo: state.repoData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDropDown: (e) => dispatch(actionCreators.sortBy(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortBy);
