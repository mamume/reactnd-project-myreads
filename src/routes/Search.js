import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as BookAPI from '../BooksAPI'
import SearchResult from './SearchResult'

export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            query: "",
            result: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.search = this.search.bind(this)
        this.updateResult = this.updateResult.bind(this)
    }

    handleChange(event) {
        console.log('query before', this.state.query)
        console.log('value', event.target)

        this.setState({
            query: event.target.value
        }, this.search)

        // const { name, value } = event.target
        // this.setState({
        //     [name]: value
        // })


        // console.log('query', this.state.query)
        // console.log('query', this.state.query)

        // this.search()
    }

    search() {
        // let result = []
        // console.log(this.state.query.trim())
        BookAPI.search(this.state.query.trim())
            .then(response => this.setState({
                result: response
            }))
            .then(() => console.log(this.state.result))

    }

    updateResult(book, shelf) {
        BookAPI.update(book, shelf)

        this.search()
    }

    render() {
        return (
            <Route path='/search'>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to='/' className="close-search">
                            Close
                        </Link>
                        <div className="search-books-input-wrapper">
                            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                            <input
                                type="text"
                                name="query"
                                placeholder="Search by title or author"
                                onChange={this.handleChange}
                                value={this.state.query}
                            />
                        </div>
                    </div>

                    <SearchResult
                        result={this.state.result}
                        updateResult={this.updateResult}
                    />
                </div>
            </Route>
        )
    }
}
