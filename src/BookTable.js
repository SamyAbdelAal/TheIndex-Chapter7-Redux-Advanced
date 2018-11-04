import React, { Component } from "react";
import { connect } from "react-redux";
import BookRow from "./BookRow";

class BookTable extends Component {
  render() {
    const bookRows = this.props.books.map(book => (
      <BookRow key={book.title} book={book} />
    ));
    return (
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{bookRows}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    author: state.rootAuth.author
  };
};

export default connect(mapStateToProps)(BookTable);
