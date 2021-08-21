import React, { Component } from 'react'
import * as BookAPI from "../BooksAPI"

export default class BookShelfChanger extends Component {
    // console.log(props)
    // constructor() {
    //     super()

    //     // this.getShelf = this.getShelf.bind(this)
    //     this.shelf = BookAPI.get(this.props.id).then(response => response.shelf)
    // }

    state = {
        shelf: this.props.shelf
    }

    // getShelf(bookID) {
    //     // let shelf = ""
    //     const shelf = BookAPI.get(bookID)
    //         .then(response => response.shelf)

    //     return shelf
    // console.log(shelf)
    // }

    // componentDidMount() {

    // }

    handleState(event) {
        this.setState({
            shelf: event.target.value
        })
    }

    render() {
        if (!this.state.shelf)
            BookAPI.get(this.props.id)
                .then(response => this.setState({ shelf: response.shelf }))


        return (
            <div className="book-shelf-changer" >
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