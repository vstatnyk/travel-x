import React from 'react';
import PropTypes from 'prop-types';
import ToggleDarkMode from './darkModeChanger';

const Header = (props) => {
  return (
    <div id='heading'>
      <div className='headingTab Title'>
        <header>
            <h1>{props.title}</h1>
        </header>
      </div>
      <div className='headingTab ColorChange'>
        <ToggleDarkMode/>
      </div>
    </div>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}



export default Header