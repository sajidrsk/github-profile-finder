import React, { Component } from "react";
// import { connect } from "react-redux";s
import { Button } from "@material-ui/core";
import axios from "axios";

import classes from "./SearchResult.module.scss";
// import * as actionCreators from "../../../store/actionCreators";

class SearchResult extends Component {
  state = {
    details: false,
    repo: null,
  };

  detailClickHandler = () => {
    this.setState({ details: !this.state.details });
    // this.props.onDetailHandler(this.props.userName);
    this.fetchRepoData(this.props.userName);
  };

  fetchRepoData = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    const data = res.data;
    this.setState({ repo: data });
  };

  render() {
    let repoData;
    if (this.state.details) {
      repoData = (
        <thead>
          <tr>
            <th>Loading..</th>
          </tr>
        </thead>
      );

      if (this.state.repo) {
        repoData = [];
        // console.log(this.state.repo.length);
        // console.log(this.state.repo);
        this.state.repo.forEach((repo) => {
          repoData.push(
            <tbody key={repo.id}>
              <tr>
                <td>{repo.description}</td>
                <td className={classes.hidden}>{repo.language}</td>
              </tr>
            </tbody>
          );
        });
      }
    }
    return (
      <div className={classes.search_result}>
        <img src={this.props.avatar} alt="noImage" />
        <p className={classes.name}>{this.props.name}</p>
        <p className={classes.url}>Profile URL : {this.props.url}</p>

        {/*<button onClick={this.detailClickHandler}>
          {this.state.details ? "Collapse" : "Details"}
    </button>*/}
        <Button
          variant="outlined"
          color="primary"
          onClick={this.detailClickHandler}
        >
          {this.state.details ? "Collapse" : "Details"}
        </Button>

        {this.state.details ? <table>{repoData}</table> : null}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     repo: state.repoData,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDetailHandler: (userName) =>
//       dispatch(actionCreators.fetchRepoData(userName)),
//     onDetailCloser: () => dispatch(actionCreators.removeRepoData()),
//   };
// };

export default SearchResult;
