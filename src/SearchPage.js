import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchPage extends Component {
  static propTypes = {
    searchBooks: PropTypes.func.isRequired,
    updateShelf: PropTypes.func.isRequired,
    foundBooks: PropTypes.array
  }

  state = {
    query: ''
  }

  // This will run everytime the search input field is updated.
  // Sets the state of query, and return search results
  updateQuery = (event) => {
    const query = event.target.value.trim()
    this.setState({ query })
    this.props.searchBooks(query)
  }

  render() {
    const { foundBooks, updateShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input autoFocus
              type="text"
              value={this.state.query}
              onChange={this.updateQuery}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {foundBooks.map( (book) => (
              <Book
                key={book.id}
                id={book.id}
                book={book}
                updateShelf={updateShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage