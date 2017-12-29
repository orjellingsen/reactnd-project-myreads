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
    wantToRead: [],
    shelves: [
      {id: 'currentlyReading', title: 'Currently Reading'},
      {id: 'wantToRead', title: 'Want to Read'},
      {id: 'read', title: 'Read'}
    ]
  }

  placeInShelf = (books) => {
    for (const shelf of this.state.shelves) {
      this.setState({ [shelf.id]: books.filter((book) => book.shelf === shelf.id)})
    }
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
