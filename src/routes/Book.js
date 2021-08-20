import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'
import * as BooksAPI from '../BooksAPI'
import { Route } from 'react-router-dom'

export default class Book extends Component {
    changeShelf = (event) => {
        BooksAPI.update(this.props.book, event.target.value);
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("http://books.google.com/books/content?id=${this.props.book.id}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")` }}></div>

                    <Route path='/' render={({ history }) => (
                        <BookShelfChanger
                            onChangeShelf={(event) => {
                                this.changeShelf(event)
                                history.push('/')
                            }}
                        />
                    )} />


                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }
}
