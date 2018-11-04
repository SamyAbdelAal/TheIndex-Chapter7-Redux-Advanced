import * as actionCreators from "../actions/actionTypes";
const initialState = {
  author: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionCreators.FETCH_AUTHOR_DETAIL:
      return {
        ...state,
        author: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
