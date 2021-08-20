import React, { Component } from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from '../BooksAPI'
import { Route, Link } from 'react-router-dom';

export default class Home extends Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: []
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

                let currentlyReading = []
                let wantToRead = []
                let read = []
                for (const book of result) {
                    if (book.shelf === "currentlyReading")
                        currentlyReading.push(book)
                    else if (book.shelf === "wantToRead")
                        wantToRead.push(book)
                    else
                        read.push(book)
                }

                this.setState({
                    currentlyReading,
                    wantToRead,
                    read
                })

                // console.log("currently", this.state.currentlyReading)
                // console.log("want", this.state.wantToRead)
                // console.log("read", this.state.read)
                // console.log(this.state.wantToRead.map(book => book))
            });
    }


    render() {
        return (
            <Route path='/'>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <BookShelf
                                title="Currently Reading"
                                books={this.state.currentlyReading}
                            />

                            <BookShelf
                                title="Want to Read"
                                books={this.state.wantToRead}
                            />

                            <BookShelf
                                title="Read"
                                books={this.state.read}
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
