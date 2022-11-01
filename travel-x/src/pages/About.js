import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import img1 from ".././components/images/Portrait_Placeholder.png";
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
          Programmers
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
                image={img1}
                alt="place holder"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Test 1
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
                image={img1}
                alt="place holder"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Test 3
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
