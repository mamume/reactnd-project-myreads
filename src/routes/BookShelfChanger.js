import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BookShelfChanger extends Component {


    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={this.props.onChangeShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}
