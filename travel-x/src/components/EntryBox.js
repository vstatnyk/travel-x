import React from 'react'
import { query } from '../server';

const EntryBox = (props) => {

    
    const handleClick = async (e) => {
        const SSNum = e.target.ssn.value;
        console.log(await query(SSNum));
    }

    return (
        <form onSubmit={handleClick}>
            <label>
                {props.text}
                <input type="text" name="ssn" placeholder='xxx-xx-xxxx'/>
                </label>
                <button>GO</button>
        </form>
    )
  }

  
  export default EntryBox
