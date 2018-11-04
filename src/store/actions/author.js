import * as actionCreators from "./actionTypes";
import axios from "axios";

export const fetchAuthorDetail = authorId => {
  return dispatch => {
    axios
      .get(`https://the-index-api.herokuapp.com/api/authors/${authorId}/`)
      .then(res => res.data)
      .then(author =>
        dispatch({
          type: actionCreators.FETCH_AUTHOR_DETAIL,
          payload: author
        })
      );
  };
};
