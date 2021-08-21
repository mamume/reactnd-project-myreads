import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BookAPI from '../BooksAPI'
import SearchResult from './SearchResult'
import { DebounceInput } from 'react-debounce-input';

export default class Search extends Component {
    constructor() {
        super()

        // Initialize State
        this.state = {
            query: "",
            result: []
        }

        // Bind methods to class
        this.handleChange = this.handleChange.bind(this)
        this.search = this.search.bind(this)
        this.updateResult = this.updateResult.bind(this)
    }

    // To handle change on input
    handleChange(value) {
        // changing state of query
        this.setState({
            query: value
            // After that trigger search function 
        }, this.search)
    }

    // Using search API to get the result then alternate result state
    search() {
        // Search by query state
        BookAPI.search(this.state.query.trim())
            .then(response => {
                // If there is response and it's not error update state with response
                if (response && !response.error)
                    this.setState({
                        result: response
                    })
                // else reset search result state
                else
                    this.setState({
                        result: []
                    })
            })
    }

    // Method to change shelf from search results using API
    updateResult(book, shelf) {
        BookAPI.update(book, shelf)
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">

                    {/* Link to navigate to Home component */}
                    <Link to='/' className="close-search">
                        Close
                    </Link>

                    <div className="search-books-input-wrapper">
                        {/* Using DebounceInput instead of regular input from performance */}
                        <DebounceInput
                            minLength={2}
                            debounceTimeout={300}
                            type="text"
                            name="query"
                            placeholder="Search by title or author"
                            onChange={(event) => this.handleChange(event.target.value)}
                            value={this.state.query}
                        />
                    </div>
                </div>

                {/* Render SearchResult component passin the result state from API and updateResult method to updateShelf */}
                <SearchResult
                    result={this.state.result}
                    updateResult={this.updateResult}
                />
            </div>
        )
    }
}
