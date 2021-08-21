import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as BookAPI from '../BooksAPI'
import SearchResult from './SearchResult'
import { DebounceInput } from 'react-debounce-input';

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

    handleChange(value) {
        // console.log('query before', this.state.query)
        // console.log('value', event.target.value)

        // if (/^[a-zA-Z]+$/.test(event.target.value))
        this.setState({
            query: value
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
            .then(response => {
                // console.log('response', response)
                if (response && !response.error)
                    this.setState({
                        result: response
                    })
                else
                    this.setState({
                        result: []
                    })
            })
        // .then(() => console.log(this.state.result))

    }

    updateResult(book, shelf) {
        BookAPI.update(book, shelf)
            .then(() => this.handleChange(this.state.query))
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

                    <SearchResult
                        result={this.state.result}
                        updateResult={this.updateResult}
                    />
                </div>
            </Route>
        )
    }
}
