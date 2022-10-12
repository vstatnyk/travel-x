import * as React from 'react'
import DataDisplay from './DataGrid';
import { Button } from '@mui/material';
import { GridSearchIcon } from '@mui/x-data-grid';

const EntryBox = (props) => {

    const [ssNum, setSSN] = React.useState(null);
    
    const handleClick = async (e) => {
        e.preventDefault();
        setSSN(e.target.ssn.value);
    }


    return (
        <form onSubmit={handleClick}>
            <label>
                {props.text}
                <input type="text" name="ssn" placeholder='xxx-xx-xxxx'/>
            </label>
            <Button variant = "contained" size = "small" startIcon={<GridSearchIcon/>} type = "click">Search</Button>
            <div className='ssNum'>
                {ssNum ? <p><DataDisplay ssn  = {ssNum}/></p> : null}
            </div>
        </form>
    )
  }

  
  export default EntryBox
