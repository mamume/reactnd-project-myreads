import React from 'react';
// import * as BooksAPI from './BooksAPI' 
import './App.css';
import Search from './routes/Search'
import Home from './routes/Home'
import { Route, Switch } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
  }

  // onNavigate = (boolValue) => {
  //   this.setState({
  //     showSearchPage: boolValue
  //   })
  // }

  render() {
    return (
      <div className="app">
        {/* {this.state.showSearchPage ? (
          <Search
            setSearchPage={this.onNavigate}
          />
        ) : (
          <Home
            setSearchPage={this.onNavigate}
          />
        )} */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={Search} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
