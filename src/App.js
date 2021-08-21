import React from 'react';
import './App.css';
import Search from './routes/Search'
import Home from './routes/Home'
import { Route, Switch } from 'react-router-dom';

function BooksApp() {
  return (
    <div className="app">
      {/* Render component depending on path */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/search' component={Search} />
      </Switch>
    </div>
  )
}

export default BooksApp
