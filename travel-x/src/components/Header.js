import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header>
        <div>{props.title}</div>
    </header>
    
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header