import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import style from './css/App.css'
import {Banner} from './Banner'
import Body from './Body'
import ScalarFrame from './ScalarFrame'

const path = '/chicago1919'

export default class App extends Component {
  render() {
    const pathname = window.location.pathname
    return (
      <BrowserRouter basename={path}>
        <div className={style.App} id="App" style={{overflow: pathname === '/chicago1919/' ? 'auto' : 'hidden'}}>
        <Banner />
        <Switch>
          <Route exact path="/" component={Body} />
          <Route path="/:frameId" component={ScalarFrame} />
          <Route component={Body} />
        </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
