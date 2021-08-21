import React, { Component } from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from '../BooksAPI'
import { Route, Link } from 'react-router-dom';

export default class Home extends Component {
    constructor() {
        super()

        // Initialize three arrays for shelves
        this.state = {
            currentlyReading: [],
            wantToRead: [],
            read: []
        }

        // Bind methods to the class
        this.changeShelf = this.changeShelf.bind(this)
    }

    // Get Books using API and assign them the their shelves 
    componentDidMount() {
        // Get all the books of shelves
        BooksAPI.getAll()
            .then(result => {
                // Initialize arrays for shelves
                let currentlyReading = []
                let wantToRead = []
                let read = []

                // Iterate on every book in the response
                for (const book of result) {
                    // check which shelf, then push in it
                    if (book.shelf === "currentlyReading")
                        currentlyReading.push(book)
                    else if (book.shelf === "wantToRead")
                        wantToRead.push(book)
                    else
                        read.push(book)
                }

                // Update state by every shelf
                this.setState({
                    currentlyReading,
                    wantToRead,
                    read
                })
            });
    }

    // Method to change the shelf of a specific book 
    changeShelf(book, shelf) {
        // Use update from API to change shelf
        BooksAPI.update(book, shelf)
            // Reassign books to each shelf to update the view
            .then(() => this.componentDidMount())
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {/* Render every BookShelf component passing its title, books, and method to change shelf */}
                        <BookShelf
                            title="Currently Reading"
                            books={this.state.currentlyReading}
                            changeShelf={this.changeShelf}
                        />

                        <BookShelf
                            title="Want to Read"
                            books={this.state.wantToRead}
                            changeShelf={this.changeShelf}
                        />

                        <BookShelf
                            title="Read"
                            books={this.state.read}
                            changeShelf={this.changeShelf}
                        />
                    </div>
                </div>

                {/* Link to navigate to search component */}
                <div className="open-search">
                    <Link to="/search"><button>Add a book</button></Link>
                </div>
            </div>
        )
    }
}
