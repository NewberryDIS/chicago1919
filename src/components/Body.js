import React, { Component } from 'react'
import style from './css/App.css'
import Header from './Header'
import Legacyevents from './legacyevents'
import About from './About'
import Featured from './Featured'
import Footer from './Footer'
// import TwitterSection from './TwitterSection'

class Body extends Component {
  render() {
    return (
      <div className={style.Body} >
        <Header />
        <About />
        <Legacyevents />
        <Featured />
        <Footer />
      </div>
    )
  }

}

export default Body
