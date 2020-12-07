import React, { Component } from "react";
import { connect } from "react-redux";
import { DebounceInput } from "react-debounce-input";

import classes from "./SearchInput.module.scss";
import * as actionCreators from "../../../store/actionCreators";

class SearchInput extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <DebounceInput
          debounceTimeout={400}
          className={classes.search_bar}
          onChange={(e) => this.props.fetchSearch(e)}
          placeholder="Type Here...."
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearch: (e) => dispatch(actionCreators.fetchSearchData(e)),
  };
};

export default connect(null, mapDispatchToProps)(SearchInput);
