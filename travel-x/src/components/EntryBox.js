import React from 'react'
import { query } from '../server';

const EntryBox = (props) => {

    const[DMV, setDMV] = React.useState(null)
    const[SS, setSS] = React.useState(null)
    const[DOS, setDOS] = React.useState(null)
    
    const handleClick = async (e) => {
        e.preventDefault();
        const SSNum = e.target.ssn.value;
        let response = await query(SSNum);
        console.log(response);
        setDMV("Hi, I'm DMV");
        setSS("Hi, I'm SS");
        setDOS("Hi, I'm DOS");

    }

    return (
        <form onSubmit={handleClick}>
            <label>
                {props.text}
                <input type="text" name="ssn" placeholder='xxx-xx-xxxx'/>
            </label>
            <button>GO</button>
            <div className='DMV'>
                {DMV ? <p>{DMV}</p> : null}
            </div>
            <div className='SS'>
                {SS ? <p>{SS}</p> : null}
            </div>
            <div className='DOS'>
                {DOS ? <p>{DOS}</p> : null}
            </div>
        </form>
    )
  }

  
  export default EntryBox
