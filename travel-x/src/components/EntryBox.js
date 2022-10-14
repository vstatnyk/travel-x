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
        <Container sx={{ ml: -3, mt: 2, height: 4}}>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <InputMask
                    mask="999-99-9999"
                    maskChar= ""
                    onChange={(e) => setSSN(e.target.value)}
                >
                    {() => <TextField
                        sx={{ ml: 105}}
                        variant="filled"
                        placeholder='xxx-xx-xxxx'
                        label="Social Security Number"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton edge="end" color='primary' type='submit'>
                                        <GridSearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />}
                </InputMask>
                <div className='ssNum'>
                    {show ? <p><DataDisplay ssn  = {value}/></p> : null}
                </div>
            </form>
        </Container>
    );
  }

  
  export default EntryBox
