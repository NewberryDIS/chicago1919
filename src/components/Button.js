import React, { Component } from 'react'
import style from './css/Button.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Button extends Component {
  render() {
    const text = this.props.text
    const link = this.props.link
    const customStyle = this.props.style
    return (
      <Link to={link} className={style.Button} style={customStyle} >
        {text}
      </Link>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  style: PropTypes.object
}

export default Button
