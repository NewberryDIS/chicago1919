import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import style from './css/App.css'
import Banner from './Banner'
import Body from './Body'
import ScalarFrame from './ScalarFrame'

export default class App extends Component {
  render() {
    const pathname = window.location.pathname
    return (
      <BrowserRouter>
        <div className={style.App} id="App" style={{overflow: pathname === '/' ? 'unset' : 'hidden'}}>
          <Banner />
          <Route exact path="/" component={Body} />
          <Route path="/:frameId" component={ScalarFrame} />
        </div>
      </BrowserRouter>
    )
  }

}
