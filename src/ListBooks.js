import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {


  render() {
    const { filteredBooks } = this.props

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
              <BookShelf
                filteredBooks={filteredBooks('currentlyReading')}
                sectionTitle='Currently Reading'
                updateShelf={this.props.updateShelf}
              />
              <BookShelf
                filteredBooks={filteredBooks('wantToRead')}
                sectionTitle='Want to Read'
                updateShelf={this.props.updateShelf}
              />
              <BookShelf
                filteredBooks={filteredBooks('read')}
                sectionTitle='Read'
                updateShelf={this.props.updateShelf}
              />
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
