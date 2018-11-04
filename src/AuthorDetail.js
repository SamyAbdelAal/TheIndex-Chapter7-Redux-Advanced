import React, { Component } from "react";
import axios from "axios";
import * as actionCreators from "./store/actions/index";
import { connect } from "react-redux";

// Components
import BookTable from "./BookTable";
import Loading from "./Loading";

class AuthorDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.getAuthor();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.authorID !== this.props.match.params.authorID) {
      this.getAuthor();
    }
  }

  getAuthor() {
    const authorID = this.props.match.params.authorID;
    this.props.fetchAuthorDetail(authorID);
    this.setState({ loading: false });
    // instance
    //   .get(`/api/authors/${authorID}`)
    //   .then(res => res.data)
    //   .then(author => this.setState({ author: author, loading: false }))
    //   .catch(err => console.error(err));
  }

  render() {
    if (!this.props.author.first_name) {
      return <Loading />;
    } else {
      const author = this.props.author;
      console.log(author);
      return (
        <div className="author">
          <div>
            <h3>{author.first_name + " " + author.last_name}</h3>
            <img
              src={author.imageUrl}
              className="img-thumbnail img-fluid"
              alt={author.first_name + " " + author.last_name}
            />
          </div>
          <BookTable books={author.books} />
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    author: state.rootAuth.author
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAuthorDetail: authID =>
      dispatch(actionCreators.fetchAuthorDetail(authID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorDetail);
