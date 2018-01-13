import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    updateShelf: PropTypes.func.isRequired,
    filterBooks: PropTypes.func.isRequired
  }

  // Titles and shelf id will be looped through and passed
  // into the BookShelf component
  shelves = [
    {id: 'currentlyReading', title: 'Currently Reading'},
    {id: 'wantToRead', title: 'Want to Read'},
    {id: 'read', title: 'Read'}
  ]

  render() {
    const { filterBooks, updateShelf } = this.props

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
                filteredBooks={filterBooks(shelf.id)}
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
