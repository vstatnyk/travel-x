import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sample from "./download.png"

export default function PersonCard(props) {
  return (
    <Card sx={{ maxWidth: "33%" }}>
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