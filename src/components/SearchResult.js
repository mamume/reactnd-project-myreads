import React from 'react'
import Book from './Book'


export default function SearchResult(props) {
    return (
        <div className="search-books-results">
            <ol className="books-grid">

                {/* If there is a result map on it and render Book component */}
                {props.result && (props.result.map(book => (
                    <li key={book.id}>
                        <Book
                            {...book}
                            changeShelf={props.updateResult}
                        />
                    </li>
                )))
                }
            </ol>
        </div>
    )
}

