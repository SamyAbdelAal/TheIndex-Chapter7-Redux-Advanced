import * as actionCreators from "./actionTypes";
import axios from "axios";

export const fetchAuthors = () => {
  return dispatch => {
    axios
      .get("https://the-index-api.herokuapp.com/api/authors/")
      .then(res => res.data)
      .then(authors =>
        dispatch({
          type: actionCreators.FETCH_AUTHORS,
          payload: authors
        })
      );
  };
};

export const filterAuthors = query => {
  return {
    type: actionCreators.FILTER_AUTHORS,
    payload: query
  };
};
