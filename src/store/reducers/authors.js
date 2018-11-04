import * as actionCreators from "../actions/actionTypes";
const initialState = {
  authors: [],
  filterdAuthors: []
};

const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionCreators.FETCH_AUTHORS:
      return {
        ...state,
        authors: action.payload,
        filterdAuthors: action.payload
      };
    case actionCreators.FILTER_AUTHORS:
      return {
        ...state,
        filterdAuthors: state.authors.filter(author =>
          `${author.first_name} ${author.last_name}`
            .toLowerCase()
            .includes(action.payload)
        )
      };
    default:
      return state;
  }
};

export default authorsReducer;
