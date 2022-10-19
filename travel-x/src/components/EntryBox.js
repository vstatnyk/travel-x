import * as React from 'react'
import InputMask from 'react-input-mask';
import DataDisplay from './DataGrid';
import { GridSearchIcon } from '@mui/x-data-grid';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

const EntryBox = () => {
    const [ssNum, setSSN] = React.useState(null);
    const [value, setValue] = React.useState(null);
    const [show, setShow] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(true);
        setValue(ssNum);
    }

    return (
        <Container >
            <div>
                <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                    <div className='TextBox'>
                    <InputMask
                        mask="999-99-9999"
                        maskChar= ""
                        onChange={(e) => setSSN(e.target.value)}
                    >
                        {() => <TextField
                            sx={{width: 300}}
                            variant="filled"
                            placeholder='xxx-xx-xxxx'
                            label="Enter Social Security Number"
                            InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton  edge="end" color='primary' type='submit'>
                                        <GridSearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                            }}
                        />}
                    </InputMask>
                    </div>
                </form>
            </div>
            <div className='ssNum'>
                    {show ? <p><DataDisplay ssn  = {value}/></p> : null}
            </div>
        </Container>
    );
  }

  
  export default EntryBox
