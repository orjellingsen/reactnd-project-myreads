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

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({ books })
        this.matchBook()
      })
    })
  }

  filterBooks = (shelf) => {
    return this.state.books.filter((book) => book.shelf === shelf);
  }

  searchBooks = (query) => {
    query ? (
      BooksAPI.search(query, 20).then(books => {
        if(!books.error)  {
          this.setState({ foundBooks: books })
          this.matchBook()
         } else {
           this.setState({ foundBooks: [] })
         }})
    ) : (this.setState({ foundBooks: [] }))
  }

  matchBook() {
    const { foundBooks, books } = this.state
    this.setState({
      foundBooks: foundBooks.map(book => {
        book.shelf = 'none'
        books.forEach(myBook => {
          myBook.id === book.id && (book.shelf = myBook.shelf)
        })
        return book
      })
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
            updateShelf={this.updateShelf.bind(this)}
            foundBooks={this.state.foundBooks}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
