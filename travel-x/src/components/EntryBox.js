import React from 'react'

const EntryBox = (props) => {
    return (
        <form>
            <label>
                {props.text}
                <input type="text" name="SSN" />
                </label>
            <input type="submit" value="Submit" />
        </form>
    )
  }
  
  export default EntryBox