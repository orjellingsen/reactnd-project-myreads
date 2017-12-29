import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
  render() {
    const { currentlyReading, wantToRead, read } = this.props

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf books={currentlyReading} sectionTitle="Currently Reading" />
            <BookShelf books={wantToRead} sectionTitle="Want to Read" />
            <BookShelf books={read} sectionTitle="Read" />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
