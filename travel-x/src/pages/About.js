import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import img1 from ".././components/images/Portrait_Placeholder.png";
import brianImg from "../components/images/brianbeilbypic.jpg";
import coltonImg from "../components/images/colton_carvalho.jpg";

const About = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          m: 1,
          p: 2,
          height: 90,
        }}
      >
        <Typography 
          variant = "h3" 
          component="div"
          textAlign="center"
        >
          Developers
        </Typography>
      </Box>
      <Box 
        sx={{
          maxWidth: 4/5,
        }}
      >
        <Grid 
          container 
          spacing={3}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs="auto">
            <Card sx={{maxWidth: 400}}>
              <CardMedia
                component="img"
                height="200"
                image={brianImg}
                alt="place holder"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Brian Beilby
                </Typography>
                <Typography variant="body2">
                  I am attending CSUS, studying Computer Science. This is my first big web-development project but,
                  in the past, I have worked on many projects for an internship organization which is where most of my practical
                  experience has come from. You can contact me directly at
                  <a href={`mailto:brianbeilby98@gmail.com`}> brianbeilby98@gmail.com</a>.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs="auto">
          <Card sx={{maxWidth: 400}}>
              <CardMedia
                component="img"
                height="200"
                image={img1}
                alt="place holder"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Test 2
                </Typography>
                <Typography variant="body2">
                  This clown did some coding. What a nerd
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs="auto">
            <Card sx={{maxWidth: 400}}>
              <CardMedia
                component="img"
                height="200"
                image={coltonImg}
                alt="place holder"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Colton Carvalho
                </Typography>
                <Typography variant="body2">
                  Currently I'm studying for a bachelor's degree in Computer Science at California State University, Sacramento.
                  On this web project I worked on the backend code for data processing, editing the front end code on an incidental basis.
                  Most of my experience in working on projects comes from: previous internship opportunities, such as working 
                  on cognitive and high frequency long range techonology in a 5G environment; freelance client-programmer requests; along with 
                  personal projects stemming upwards of 8 years back. <br></br> 
                  Contact me directly at <a href={`mailto:Coolguy1079@gmail.com`}>Coolguy1079@gmail.com</a>.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs="auto">
            <Card sx={{maxWidth: 400}}>
              <CardMedia
                component="img"
                height="200"
                image={img1}
                alt="place holder"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Test 4
                </Typography>
                <Typography variant="body2">
                  This clown did some coding. What a nerd
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs="auto">
            <Card sx={{maxWidth: 400}}>
              <CardMedia
                component="img"
                height="200"
                image={img1}
                alt="place holder"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Test 5
                </Typography>
                <Typography variant="body2">
                  This clown did some coding. What a nerd
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs="auto">
            <Card sx={{maxWidth: 400}}>
              <CardMedia
                component="img"
                height="200"
                image={img1}
                alt="place holder"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Test 6
                </Typography>
                <Typography variant="body2">
                  This clown did some coding. What a nerd
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>

  );
};

export default About;
