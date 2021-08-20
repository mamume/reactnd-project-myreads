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
                const keys = Object.keys(result)
                this.setState({
                    allBooks: result,
                    currentlyReading: keys.filter(index => result[index].shelf === 'currentlyReading').map(i => result[i]),
                    wantToRead: keys.filter(index => result[index].shelf === 'wantToRead').map(i => result[i]),
                    read: keys.filter(index => result[index].shelf === 'read').map(i => result[i])
                });
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
