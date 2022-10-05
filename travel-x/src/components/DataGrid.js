import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { query } from '../server';

  const DataDisplay = (props) => {
    const [data, setData] = React.useState([]);

    const getData = async () => {
      await query(props.ssn).then((res) => {
        setData(res.DMV);
      })
    }

    React.useEffect(() => {
      getData();
    });

    const columns = [
      {
        field: 'id',
        headerName: 'ID',
        width: 40
      },
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

    return (
      <Box sx={{ width: '33%', bgcolor: 'white', mt: 2, position: 'fixed' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          autoHeight
        />
      </Box>
    );
  }

  export default DataDisplay;