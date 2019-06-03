import React, { Component } from 'react'
import style from './css/Button.css'
import PropTypes from 'prop-types'

class Button extends Component {
  render() {
    const text = this.props.text
    const link = this.props.link
    const customStyle = this.props.style
    return (
      <a href={link} className={style.Button} style={customStyle} >
        {text}
      </a>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  style: PropTypes.object
}

export default Button
