import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Grid, Typography } from '@mui/material';
import img1 from ".././components/images/Portrait_Placeholder.png";
import brianImg from "../components/images/brianbeilbypic.jpg";
import coltonImg from "../components/images/colton_carvalho.jpg";
import moshImg from "../components/images/Resized Photo for Profile Picture.jpg";
import vsImg from "../components/images/Vstat.jpg";
import AboutCard from '../components/AboutCard';

const About = () => {
  return (
    <Container maxWidth="xxl">
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
          flexGrow: 1
        }}
      >
        <Grid 
          container 
          spacing={3}
          alignItems="stretch"
          justifyContent="space-evenly"
        >
          <Grid item xs="auto">
            <AboutCard 
              imgPath={brianImg}
              name={"Brian Beilby"}
              aboutInfo={"I am attending CSUS, studying Computer Science. This is my first big web-development project but, in the past, I have worked on many projects for an internship organization which is where most of my practical experience has come from. You can contact me directly at "}
              email={"brianbeilby98@gmail.com"}
            />
          </Grid>
          <Grid item xs="auto">
            <AboutCard 
              imgPath={moshImg}
              name={"Moshley Marcelo"}
              aboutInfo={"I am a CSU Sacramento student majoring in Computer Science. So far most of my experience has come from recent coursework I have completed in the past. One project involved the use of UNIX, I made a decision making game based off of the Oregon Trail game with the use of signed/unsigned jump statements, random number statements, & math calculations. Another project, involved a game screen with collision detection, 2d movement, character frames, & interaction with items. This project so far, is the first i've ever done utilizing JavaScript, I have worked on the back end of this project mostly adding photos to on the webpage & Vendia, getting the buttons on the website to work properly, & getting the webpage to not glitch out & function normally. I do intend on doing more within my major, including joining an internship, joining any clubs, learning more languages including Python, & keeping my coding skills up to date. Feel free to contact me @ "}
              email={"moshleymarcelo11@yahoo.com"}
            />
          </Grid>
          <Grid item xs="auto">
            <AboutCard 
              imgPath={coltonImg}
              name={"Colton Carvalho"}
              aboutInfo={"Worked on the backend code for data processing, created the documentation for the project deliverable, along with editing the front end code on an incidental basis. Contact me directly at "}
              email={"Coolguy1079@gmail.com"}
            />
          </Grid>
          <Grid item xs="auto">
            <AboutCard 
              imgPath={img1}
              name={"Alexzander Kemble"}
              aboutInfo={"Front End (dark mode, pages, etc)"}
              email={"akemble@csus.edu"}
            />
          </Grid>
          <Grid item xs="auto">
            <AboutCard 
              imgPath={img1}
              name={"Test 5"}
              aboutInfo={"This clown did some coding. What a nerd"}
            />
          </Grid>
          <Grid item xs="auto">
            <AboutCard 
              imgPath={vsImg}
              name={"Vlad Statnyk"}
              aboutInfo={"This clown did some coding. What a nerd"}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
