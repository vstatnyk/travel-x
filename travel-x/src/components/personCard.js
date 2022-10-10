import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sample from "./download.png"
// import { query } from '../server';

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



  return (
    
    <Card sx={{ maxWidth: "33%" }}>
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
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit data</Button>
      </CardActions>
    </Card>
  );
}