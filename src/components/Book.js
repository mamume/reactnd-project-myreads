import React from 'react'
import BookShelfChanger from './BookShelfChanger'

export default function Book(props) {
    return (
        <div className="book">
            <div className="book-top">
                {/* Getting book cover by id from props */}
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("http://books.google.com/books/content?id=${props.id}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")` }}></div>

                {/* Render BookShelfChanger component passin required props */}
                <BookShelfChanger
                    id={props.id}
                    shelf={props.shelf}
                    book={props}
                    changeShelf={props.changeShelf}
                />

            </div>

            {/* Render book info from props */}
            <div className="book-title">{props.title}</div>
            <div className="book-authors">{props.authors}</div>
        </div>
    )
}