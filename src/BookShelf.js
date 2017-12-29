import React, { Component } from 'react'
import BookOptions from './BookOptions'

class BookShelf extends Component {
  render() {
    const { books, sectionTitle } = this.props
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{sectionTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map( (book) => (
              <li>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("{book.imageLinks.thumbnail}")' }}></div>
                    <div className="book-shelf-changer">
                      <BookOptions />
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf