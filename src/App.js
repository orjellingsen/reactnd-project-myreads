import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks'

class BooksApp extends Component {
  state = {
    books: []
  }

 /* updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(this.setState({shelf}))
  }*/

 componentDidMount() {
    BooksAPI.getAll().then( (books) => {
      this.setState({ books })
    })
  }

  updateShelf(id, value) {
    const index = this.state.books.findIndex((book) => book.id === id);
    let book = this.state.books[index];
    book.shelf = value;
    let books = this.state.books;
    books[index] = book;
    this.setState({ books });
  }
  filteredBooks(shelf) {
    return this.state.books.filter((book) => book.shelf === shelf);
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            updateShelf={this.updateShelf.bind(this)}
            filteredBooks={this.filteredBooks.bind(this)}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchPage />
        )}/>
      </div>
    )
  }
}

export default BooksApp
