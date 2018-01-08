import React, { Component } from 'react'
import Book from './Book.js'

class BookShelf extends Component {
  render() {
    const { sectionTitle, filteredBooks} = this.props

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
                updateShelf={this.props.updateShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf