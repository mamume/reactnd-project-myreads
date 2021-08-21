import React, { Component } from 'react'
import * as BookAPI from "../BooksAPI"

export default class BookShelfChanger extends Component {
    // State of current shelf, even if its undefined
    state = {
        shelf: this.props.shelf
    }

    // If shelf changed from select, change shelf state
    handleState(event) {
        this.setState({
            shelf: event.target.value
        })
    }

    render() {
        // IF book has no shelf (result of search API) 
        if (!this.state.shelf)
            // Get the shelf value using API and alternate shelf state
            BookAPI.get(this.props.id)
                .then(response => this.setState({ shelf: response.shelf }))

        return (
            <div className="book-shelf-changer" >
                {/* Render select using changeShelf from props and handleState */}
                <select onChange={(event) => { this.props.changeShelf(this.props, event.target.value); this.handleState(event) }} value={this.state.shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div >
        )
    }

}