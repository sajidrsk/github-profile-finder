import React from "react";

import SearchInput from "./SearchInput/SearchInput";
import SortBy from "./SortBy/SortBy";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.inputs}>
        <SortBy />
        <SearchInput />
      </div>
    </div>
  );
};

export default Header;
