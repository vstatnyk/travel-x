import React from 'react';
import { Box } from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

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
      width: 110,
      editable: true,
    }
  ];
  
  const rows = [
    { name: 'Lannister', dob: 'Cersei', dlNumber: 42 },
    { name: 'Lannister', dob: 'Jaime', dlNumber: 45 },
    { name: 'Stark', dob: 'Arya', dlNumber: 16 },
    { name: 'Targaryen', dob: 'Daenerys', dlNumber: null },
    { name: 'Snow', dob: 'Jon', dlNumber: 35 },
    { name: 'Melisandre', dob: null, dlNumber: 150 },
    { name: 'Clifford', dob: 'Ferrara', dlNumber: 44 },
    { name: 'Frances', dob: 'Rossini', dlNumber: 36 },
    { name: 'Roxie', dob: 'Harvey', dlNumber: 65 },
  ];

  export default function DataGridDemo() {
    return (
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    );
  }