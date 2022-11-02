import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import img1 from ".././components/images/Portrait_Placeholder.png";
import brianImg from "../components/images/brianbeilbypic.jpg";
import moshImg from "../components/images/Resized Photo for Profile Picture.jpg";
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
                height="350"
                image={moshImg}
                alt="place holder"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Moshley Marcelo
                </Typography>
                <Typography variant="body2">
                  I am a CSU Sacramento student majoring in Computer Science. So far most of my
                  experience has come from recent coursework I have completed in the past. One project
                  involved the use of UNIX, I made a decision making game based off of
                  the Oregon Trail game with the use of signed/unsigned jump statements, 
                  random number statements, & math calculations. Another project, involved a game 
                  screen with collision detection, 2d movement, character frames, & interaction with 
                  items. This project so far, is the first i've ever done utilizing JavaScript
                  , I have worked on the back end of this project mostly adding photos to
                   on the webpage & Vendia, getting the buttons on the website to work properly,
                   & getting the webpage to not glitch out & function normally.   
                    I do intend on doing more within my major, including joining an internship
                  , joining any clubs, learning more languages including Python, & keeping
                    my coding skills up to date.
                  Feel free to contact me @ <a href={`mailto:moshleymarcelo11@yahoo.com`}> moshleymarcelo11@yahoo.com</a>.
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
