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
    <div> 
    
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
   

<div className = "Company">  
    About Us

<div className = "Description">    
    Back around September 11th, 2001, while the people in our country, the United States of America, were enjoying normal lives, with everyone either at work or school or visiting familiar landmarks & attractions, the country was under attack. The incidents that happened at the World Trade Center, the Pentagon, & in Pennsylvania have changed & shook the country forever. Many lives consisting of Airline Passengers, Airline Pilots & Stewards, Office Workers, Tourists, & most notably first responders (Police Officers, Firefighters, & Paramedics) were lost as a result of this tragic day, all in the act of terrorism. As a result in 2002, the Homeland Security Act was written & after it passed the U.S House of Representatives and the U.S. Senate, the bill was signed on November 25, 2002. The U.S. The Department of Homeland Security was established due to that bill, which helped add more security to our nation's borders & airports. Their mission has been a success, and they have over the years since its founding have evolved over time as more self service passport control machines were installed for faster identification to the U.S. & more airports adopted the TSA Pre-Check which helped decrease wait times & added more efficiency to the airport security checkpoints. Their mission has been a success & we as Travel-X have helped ensure that mission is preserved. We have established ourselves as another potential guiding force in assisting the U.S. Department of Homeland Security in ensuring that everyone’s identity is found & secured, while also providing faster lines & better efficiency towards those that live or visit our beloved country. We also do our best to help the passengers affected due to not having a passport, as coming to another country without a passport can lead to delays in arrival & can lead to a hefty fine at the immigration counter. With that, Travel-X is a huge mediator on both the passenger’s side & the U.S. Department of Homeland Security’s side. 
</div>
</div>
</div>
    

  );
};

export default About;
