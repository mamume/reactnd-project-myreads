import React from 'react'

export default function BookShelfChanger(props) {
    // console.log(props)

    return (
        <div className="book-shelf-changer">
            <select onChange={(event) => props.changeShelf(props, event.target.value)} value={props.shelf ? props.shelf : 'none'}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}
