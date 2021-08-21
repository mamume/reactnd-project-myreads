import React, { Component } from 'react'
import Book from './Book'
import * as BookAPI from '../BooksAPI'
import { array, object } from 'prop-types'

export default class SearchResult extends Component {


    render() {

        // if (this.props.length)
        // console.log('hi')


        // let books
        // if (this.props.result)
        //     console.log(this.props.result)

        // const bookResult = []
        // for (const book of this.props.result)
        //     console.log(book)

        // const booksResult = []
        // this.props.result && (this.props.result.map(book => BookAPI.get(book.id)
        //     .then(response => {
        //         console.log(response)
        //         booksResult.push(
        //             <li>
        //                 < Book
        //                     {...response}
        //                     changeShelf={this.props.updateResult}
        //                 />
        //             </li>
        //         )
        //     })))

        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.props.result && (
                        this.props.result.map(book => (
                            // console.log(book)
                            <li key={book.id}>
                                <Book
                                    {...book}
                                    changeShelf={this.props.updateResult}
                                />
                            </li>
                        )))
                    }
                </ol>
            </div>
        )
    }
}

