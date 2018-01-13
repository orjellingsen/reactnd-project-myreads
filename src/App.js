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

  // Get all books from database when app start
  componentDidMount() {
    BooksAPI.getAll().then( (books) => {
      this.setState({ books })
    })
  }

  // Updates the shelf on selected book, get an updated list of books
  // Set correct shelf on books that are listed through search
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({ books })
        this.matchBook()
      })
    })
  }

  // This function will filter books into the correct shelf
  filterBooks = (shelf) => {
    return this.state.books.filter((book) => book.shelf === shelf);
  }

  // Search for books matching the query
  searchBooks = (query) => {
    query ? (
      BooksAPI.search(query, 20).then(books => {
        // If results are returned, show books and set correct shelf
        if(!books.error)  {
          this.setState({ foundBooks: books })
          this.matchBook()
         } else {
           this.setState({ foundBooks: [] })
         }})
    ) : (this.setState({ foundBooks: [] }))
  }

  /* Map through each book in search results and see if they already exist in
     your collection. If they do, set the correct shelf.
     I had help from the react slack community to implement this function */
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
