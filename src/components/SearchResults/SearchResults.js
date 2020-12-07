import React, { Component } from "react";
import { connect } from "react-redux";

import SearchResult from "./SearchResult/SearchResult";
import classes from "./SearchResults.module.scss";

class SearchResults extends Component {
  state = {
    offset: 0,
    perPage: 5,
  };

  nextHandler = () => {
    const dataLength = this.props.data.items.length;
    const reqOff = this.state.offset + 5;
    if (dataLength > reqOff) {
      const currentOffset = this.state.offset;
      const updatedOffset = currentOffset + 5;
      this.setState({ offset: updatedOffset });
    }
  };

  prevHandler = () => {
    if (this.state.offset > 0) {
      const currentOffset = this.state.offset;
      const updatedOffset = currentOffset - 5;
      this.setState({ offset: updatedOffset });
    }
  };

  render() {
    let results = [];
    if (this.props.data) {
      let sortedRepo = this.props.data.items;
      switch (this.props.sortBy) {
        case "rankAscending":
          sortedRepo = sortedRepo.sort();
          break;
        case "rankDescending":
          sortedRepo = sortedRepo.sort().reverse();
          break;
        case "nameAscending":
          sortedRepo = sortedRepo.sort();
          break;
        case "nameDescending":
          sortedRepo = sortedRepo.sort().reverse();
          break;
        default:
          break;
      }

      const slice = sortedRepo.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );

      slice.forEach((item) => {
        results.push(
          <SearchResult
            key={item.id}
            userName={item.login}
            avatar={item.avatar_url}
            url={item.html_url}
            name={item.login}
          />
        );
      });
    }

    const footer = (
      <footer>
        <button onClick={this.prevHandler}>Prev</button>
        <button onClick={this.nextHandler}>Next</button>
      </footer>
    );
    return (
      <div>
        {this.props.data ? (
          <p style={{ marginLeft: "20%" }}>
            Total Results: {this.props.data.total_count}
          </p>
        ) : (
          <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
            Search to show Result
          </p>
        )}
        <div className={classes.search_page}>
          {this.props.data ? results : null}
        </div>
        {this.props.data ? footer : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.searchData,
    sortBy: state.sortBy,
  };
};

export default connect(mapStateToProps)(SearchResults);
