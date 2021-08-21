import React from 'react'
import BookShelfChanger from './BookShelfChanger'
// import * as BooksAPI from '../BooksAPI'
// import { Route } from 'react-router-dom'

export default function Book(props) {

    // changeShelf = (event) => {
    //     BooksAPI.update(this.props, event.target.value);
    //     // this.setState({ renderHome: true })
    // }

    // render() {
    //     // console.log(this.props.title)
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("http://books.google.com/books/content?id=${props.id}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")` }}></div>


                <BookShelfChanger
                    id={props.id}
                    shelf={props.shelf}
                    book={props}
                    changeShelf={props.changeShelf}
                />
            </div>
            <div className="book-title">{props.title}</div>
            <div className="book-authors">{props.authors}</div>
        </div>
    )
}
// }
