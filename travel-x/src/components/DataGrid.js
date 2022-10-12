import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { query } from '../server';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
//import { rgbToHex } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  const DataDisplay = (props) => {
    const [data, setData] = React.useState([]);

    const getData = async () => {
      try{
          await query(props.ssn).then((res) => {
          setData(res.DMV);
          })
        }
      catch{
        setData("could not return any values");
      }
    }
  

    React.useEffect(() => {
      getData();
    });

    const columns = [
      {
        field: 'name',
        headerName: 'Full Name',
        width: 150,
        editable: true,
      },
      {
        field: 'dob',
        headerName: 'Date Of Birth',
        width: 150,
        editable: true,
      },
      {
        field: 'dlNumber',
        headerName: 'Driver\'s License Number',
        type: 'number',
        width: 185,
        editable: true,
      }
    ];
    
    const rows = [
      { id: 1, name: data.name, dob: data.dob, dlNumber: data.dlNumber },
    ];

    if(typeof data != "string"){
      return (
        // bgcolor: 'rgb(28,54,100)'
        <Box sx={{ width: '100%', bgcolor: 'white', mt: 2, position: 'fixed', flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs direction="row">
              <Item>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection  = {false}
                  disableSelectionOnClick
                  experimentalFeatures={{ newEditingApi: true }}
                  autoHeight
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection  = {false}
                  disableSelectionOnClick
                  experimentalFeatures={{ newEditingApi: true }}
                  autoHeight
                />
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection  = {false}
                  disableSelectionOnClick
                  experimentalFeatures={{ newEditingApi: true }}
                  autoHeight
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      );  
    }
    else
    {
      return (
        <div className='ErrorReturn'>
          this person was not found in database
        </div>
      )
    }
    
  }

  export default DataDisplay;