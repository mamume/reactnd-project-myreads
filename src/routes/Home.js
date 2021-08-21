import React, { Component } from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from '../BooksAPI'
import { Route, Link } from 'react-router-dom';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            allBooks: [],
            currentlyReading: [],
            wantToRead: [],
            read: []
        }
        this.changeShelf = this.changeShelf.bind(this)
    }



    componentDidMount() {
        BooksAPI.getAll()
            .then(result => {
                // const keys = Object.keys(result)
                // console.log(result[1])
                // console.log(keys.filter(index => result[index].shelf === 'currentlyReading').map(i => result[i]))
                // this.setState({
                //     allBooks: result,
                //     currentlyReading: keys.filter(index => result[index].shelf === 'currentlyReading').map(i => result[i]),
                //     wantToRead: keys.filter(index => result[index].shelf === 'wantToRead').map(i => result[i]),
                //     read: keys.filter(index => result[index].shelf === 'read').map(i => result[i])
                // });
                // console.log(result)
                let currentlyReading = []
                let wantToRead = []
                let read = []
                for (const book of result) {
                    // allBooks.push(book)
                    if (book.shelf === "currentlyReading")
                        currentlyReading.push(book)
                    else if (book.shelf === "wantToRead")
                        wantToRead.push(book)
                    else
                        read.push(book)
                }

                this.setState({
                    allBooks: result,
                    currentlyReading,
                    wantToRead,
                    read
                })

                // console.log(this.state.allBooks)
                // console.log("currently", this.state.currentlyReading)
                // console.log("want", this.state.wantToRead)
                // console.log("read", this.state.read)
                // console.log(this.state.wantToRead.map(book => book))
            });
    }

    changeShelf(bookID, shelf) {
        // console.log(this.state.allBooks)
        // BooksAPI.update(this.props, event.target.value);

        // console.log(bookID, shelf)
        // let updatedBooks = []

        for (const book of this.state.allBooks) {
            if (book.id === bookID) {
                BooksAPI.update(book, shelf)
                    .then(response => this.componentDidMount())
                // book.shelf = shelf
            }

            // updatedBooks.push(book)
        }

        // this.componentDidMount()
    }


    render() {
        return (
            <Route exact path='/'>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <BookShelf
                                key="1"
                                title="Currently Reading"
                                books={this.state.currentlyReading}
                                changeShelf={this.changeShelf}
                            />

                            <BookShelf
                                key="2"
                                title="Want to Read"
                                books={this.state.wantToRead}
                                changeShelf={this.changeShelf}
                            />

                            <BookShelf
                                key="3"
                                title="Read"
                                books={this.state.read}
                                changeShelf={this.changeShelf}
                            />
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to="/search"><button>Add a book</button></Link>
                    </div>
                </div>
            </Route>
        )
    }
}
