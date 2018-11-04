import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";
// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

class AuthorsList extends Component {
  componentDidMount() {
    this.props.fetchAuthors();
  }
  render() {
    const authorCards = this.props.filterdAuthors.map(author => (
      <AuthorCard key={author.first_name + author.last_name} author={author} />
    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <SearchBar />
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authors: state.rootAuthors.authors,
    filterdAuthors: state.rootAuthors.filterdAuthors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAuthors: () => dispatch(actionCreators.fetchAuthors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorsList);
