import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchPage extends Component {
  state = {
    query: '',
    prevQuery: ''
  }

  updateQuery = (query) => {
    const { prevQuery } = this.state
    if (prevQuery !== query) {
      this.props.searchBooks(query)
      this.setState({ query })
    }
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
              onChange={(event) => this.updateQuery(event.target.value)}
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