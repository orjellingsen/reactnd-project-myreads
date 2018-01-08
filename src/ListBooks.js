import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
  shelves = [
    {id: 'currentlyReading', title: 'Currently Reading'},
    {id: 'wantToRead', title: 'Want to Read'},
    {id: 'read', title: 'Read'}
  ]

  render() {
    const { filteredBooks, updateShelf } = this.props

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.shelves.map( (shelf) => (
              <BookShelf
                key={shelf.id}
                filteredBooks={filteredBooks(shelf.id)}
                sectionTitle={shelf.title}
                updateShelf={updateShelf}
              />
            ))}
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
