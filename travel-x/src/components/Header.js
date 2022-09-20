import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header>
        <div>{props.title}</div>
        <Button/>
    </header>
    
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header