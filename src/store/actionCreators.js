import * as actionTypes from "./actionTypes";
import axios from "axios";

export const searchInput = (e) => {
  return {
    type: actionTypes.SEARCHINPUT,
    value: e.target.value,
  };
};

export const sortBy = (e) => {
  return {
    type: actionTypes.SORTBY,
    value: e.target.value,
  };
};

export const fetchSearchDataSuccess = (data) => {
  return {
    type: actionTypes.FETCHSSEARCHDATASUCCESS,
    data: data,
  };
};

export const fetchSearchData = (e) => {
  return async (dispatch) => {
    if (e.target.value) {
      // try {
      const res = await axios.get(
        "https://api.github.com/search/users?q=" + e.target.value
      );
      dispatch(fetchSearchDataSuccess(res.data));
      // } catch (err) {
      //   alert(err.message);
      // }
    }
  };
};

// export const removeRepoData = () => {
//   return {
//     type: actionTypes.REMOVEREPODATA,
//   };
// };

// export const fetchRepoDataSuccess = (data) => {
//   return {
//     type: actionTypes.FETCHREPODATASUCCESS,
//     data: data,
//   };
// };

// export const fetchRepoData = (username) => {
//   return async (dispatch) => {
//     try {
//       dispatch(removeRepoData());
//       const res = await axios.get(
//         `https://api.github.com/users/${username}/repos`
//       );
//       dispatch(fetchRepoDataSuccess(res.data));
//     } catch (err) {
//       alert(err.message);
//     }
//   };
// };
