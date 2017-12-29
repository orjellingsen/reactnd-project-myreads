import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks'

class BooksApp extends Component {
  state = {
    books: [],
    currentlyReading: [],
    read: [],
    wantToRead: []
  }

  placeInShelf = (books) => {
    // TODO: Make loop
    this.setState({ currentlyReading: books.filter((book) => book.shelf === 'currentlyReading')})
    this.setState({ read: books.filter((book) => book.shelf === 'read')})
    this.setState({ wantToRead: books.filter((book) => book.shelf === 'wantToRead')})
  }

  componentDidMount() {
    BooksAPI.getAll().then( (books) => {
      this.setState({ books })
      this.placeInShelf(books)
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            read={this.state.read}
            currentlyReading={this.state.currentlyReading}
            wantToRead={this.state.wantToRead}
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
