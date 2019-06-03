import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ScalarFrame extends Component {
  render() {
    const subpage = this.props.match.params.frameId
    const mobileThreshold = 500
    const windowWidth = window.innerWidth
    return (
      <div style={{width: '100%', height: '100%'}}>
        <iframe ref="iframe" src={'https://publications.newberry.org/digital/chicago1919/' + subpage} style={{width: '100%', height: '100%', position: windowWidth <= mobileThreshold ? 'absolute' : 'relative'}}/>
      </div>
    )
  }
}

ScalarFrame.propTypes = {
  subpage: PropTypes.string,
  match: PropTypes.object
}

export default ScalarFrame
