import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'

class BookShelf extends Component {
  static propTypes = {
    sectionTitle: PropTypes.string,
    filteredBooks: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  render() {
    const { sectionTitle, filteredBooks, updateShelf} = this.props

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{sectionTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {filteredBooks.map( (book) => (
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

export default BookShelf