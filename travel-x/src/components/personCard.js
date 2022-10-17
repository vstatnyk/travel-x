import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sample from "./download.png"
// import Box from '@mui/material/Box';
// import { DataGrid } from '@mui/x-data-grid';
// import { query } from '../server';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';

export default function PersonCard(props) {

//     const [data, setData] = React.useState([]);

//     const getData = async () => {
//       try{
//           await query(props.ssn).then((res) => {
//           setData(res.DMV);
//           })
//         }
//       catch{
//         setData("could not return any values");
//       }
//     }
  // const [data, setData] = React.useState([]);

  // const getData = async () => {
  //   try{
  //       await query(props.ssn).then((res) => {
  //       setData(res.DMV);
  //       })
  //     }
  //   catch{
  //     setData("could not return any values");
  //   }
  // }


  // React.useEffect(() => {
  //   getData();
  // });

  // const columns = [
  //   {
  //     field: 'name',
  //     headerName: 'Full Name',
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: 'dob',
  //     headerName: 'Date Of Birth',
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: 'dlNumber',
  //     headerName: 'Driver\'s License Number',
  //     type: 'number',
  //     width: 185,
  //     editable: true,
  //   }
  // ];
  
  // const rows = [
  //   { id: 1, name: data.name, dob: data.dob, dlNumber: data.dlNumber },
  // ];


  return (
    
    <Card sx={{ maxWidth: "100%" }}>
      <Typography variant="body1" color="text.primary" fontSize={40} textAlign = "center">
        {props.dept}
      </Typography>
      <CardMedia
        component="img"
        height="600"
        image ={sample}
        alt="id_photo"
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {props.text}
          {/* <Box>
          <Grid container spacing={1}>
            <Grid item xs direction="row"> */}
              {/* <Item> */}
                {/* <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection  = {false}
                  disableSelectionOnClick
                  experimentalFeatures={{ newEditingApi: true }}
                  autoHeight
                /> */}
              {/* </Item> */}
            {/* </Grid>
            </Grid>
            </Box> */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit data</Button>
      </CardActions>
    </Card>
  );
}