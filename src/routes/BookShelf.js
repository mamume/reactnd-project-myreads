import React, { Component } from 'react'
import Book from './Book'
import * as BookAPI from '../BooksAPI'

export default class BookShelf extends Component {
    render() {
        // console.log(this.props.books)

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">

                        {Object.keys(this.props.books).map(index => (
                            <li><Book
                                // id={this.props.books[index].id}
                                // title={this.props.books[index].title}
                                // authors={this.props.books[index].authors}

                                book={this.props.books[index]}
                            /></li>
                        ))}

                    </ol>
                </div>
            </div>
        )
    }
}
