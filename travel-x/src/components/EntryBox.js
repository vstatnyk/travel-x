// import { trTR } from '@mui/x-data-grid';
import * as React from 'react'
// import { query } from '../server';
import DataDisplay from './DataGrid';
import { Button } from '@mui/material';
import { GridSearchIcon } from '@mui/x-data-grid';

const EntryBox = (props) => {

    // const [DMV, setDMV] = React.useState(null);
    // const [SS, setSS] = React.useState(null);
    // const [DOS, setDOS] = React.useState(null);
    const [ssNum, setSSN] = React.useState(null);
    
    const handleClick = async (e) => {
        e.preventDefault();
        // try
        // {
        //     const SSNum = e.target.ssn.value;
        //     let response = await query(SSNum);
        //     console.log(response);
        // }
        // finally
        // {
        // setDMV("Hi, I'm DMV");
        // setSS("Hi, I'm SS");
        // setDOS("Hi, I'm DOS");
        setSSN(e.target.ssn.value);
        // }
        
        
        

    }


    return (
        <form onSubmit={handleClick}>
            <label>
                {props.text}
                <input type="text" name="ssn" placeholder='xxx-xx-xxxx'/>
            </label>
            <Button variant = "contained" size = "small" startIcon={<GridSearchIcon/>} type = "click">Search</Button>
            {/* <div className='DMV'>
                {DMV ? <p>{DMV}</p> : null}
            </div>
            <div className='SS'>
                {SS ? <p>{SS}</p> : null}
            </div> */}
            <div className='ssNum'>
                {ssNum ? <p><DataDisplay ssn  = {ssNum}/></p> : null}
            </div>
        </form>
    )
  }

  
  export default EntryBox
