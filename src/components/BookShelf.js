import React from 'react'
import Book from './Book'

export default function BookShelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">

                    {/* For every book render Book component passing book attributes and a method for change shelf */}
                    {props.books.map(book => (
                        <li key={book.id}>
                            <Book
                                {...book}
                                changeShelf={props.changeShelf}
                            />
                        </li>
                    ))}

                </ol>
            </div>
        </div>
    )
}