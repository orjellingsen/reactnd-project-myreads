import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks'

class BooksApp extends Component {
  state = {
    books: [],
    foundBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then( (books) => {
      this.setState({ books })
    })
  }

  updateShelf = (book, value) => {
    BooksAPI.update(book, value).then(shelves => {
      BooksAPI.getAll().then(updateBooks => {
        this.setState({
          books: updateBooks
        })
      })
    })
  }

  filterBooks = (shelf) => {
    return this.state.books.filter((book) => book.shelf === shelf);
  }

  searchBooks = (query) => {
    BooksAPI.search(query).then((books) => {
      if(books) {
        !books.error ?
          this.setState({ foundBooks : books }) :
          this.setState({ foundBooks : [] })
      }
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            updateShelf={this.updateShelf.bind(this)}
            filterBooks={this.filterBooks.bind(this)}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchPage
            searchBooks={this.searchBooks.bind(this)}
            foundBooks={this.state.foundBooks}
            updateShelf={this.updateShelf.bind(this)}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
