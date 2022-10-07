import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { query } from '../server';
//import { rgbToHex } from '@mui/material';

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
      // {
      //   field: 'id',
      //   headerName: 'ID',
      //   width: 40
      // },
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
        <Box sx={{ width: '33%', bgcolor: ' white', mt: 2, position: 'fixed'}}> 
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