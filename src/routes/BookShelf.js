import React from 'react'
import Book from './Book'

export default function BookShelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">

                    {props.books.map(book => (
                        <li><Book
                            // book={book}
                            {...book}
                        /></li>
                    ))}

                </ol>
            </div>
        </div>
    )
}