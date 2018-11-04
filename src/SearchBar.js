import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // this.setState({ query: event.target.value });
    // this.props.changeHandler(event.target.value);
    this.props.filterAuthors(event.target.value);
  }

  filterAuthors(query) {
    query = query.toLowerCase();
    // let filteredAuthors = this.props.authors.filter(author => {
    //   return `${author.first_name} ${author.last_name}`
    //     .toLowerCase()
    //     .includes(query);
    // });
    this.props.filterAuthors(query);
  }

  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input
            className="form-control"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterAuthors: authors => dispatch(actionCreators.filterAuthors(authors))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
