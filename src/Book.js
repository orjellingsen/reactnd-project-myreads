import React, { Component } from 'react'

class Book extends Component {
  handleChange = (e) => {
    const shelf = e.target.value
    this.props.updateShelf(this.props.id, shelf)
  }

  render() {
    const { book } = this.props

    return(
      <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail ? book.imageLinks.thumbnail : ''}")` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf ? book.shelf : 'none'} onChange={this.handleChange.bind(this)}>
              <option value="" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title ? book.title : 'No title'}</div>
        <div className="book-authors">{book.authors ? book.authors : ''}</div>
      </div>
      </li>
    )
  }
}

export default Book