import * as actionTypes from "./actionTypes";

const initialState = {
  search: null,
  searchData: "",
  // repoData: null,
  sortBy: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCHINPUT:
      return {
        ...state,
        search: action.value,
      };
    case actionTypes.FETCHSSEARCHDATASUCCESS:
      return {
        ...state,
        searchData: action.data,
      };
    // case actionTypes.FETCHREPODATASUCCESS:
    //   return {
    //     ...state,
    //     repoData: action.data,
    //   };
    // case actionTypes.REMOVEREPODATA:
    //   return {
    //     ...state,
    //     repoData: null,
    //   };
    case actionTypes.SORTBY:
      return {
        ...state,
        sortBy: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
