import React, { Component } from 'react'
import './App.scss';
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import Contact from './components/Contact'


export default class App extends Component {

  render() {

    return (
      <div className="main">
        <Nav />
        <SearchBar />
        <Contact />
      </div>

    )
  }
}



