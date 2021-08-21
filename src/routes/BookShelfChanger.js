import React from 'react'
import { Link } from 'react-router-dom'

export default function BookShelfChanger(props) {
    // console.log(props)

    return (
        <div className="book-shelf-changer">
            <select onChange={(event) => props.changeShelf(props.id, event.target.value)} value={props.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}
