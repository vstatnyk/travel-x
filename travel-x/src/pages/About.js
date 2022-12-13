import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Grid, Typography } from '@mui/material';
import img1 from ".././components/images/Portrait_Placeholder.png";
import brianImg from "../components/images/brianbeilbypic.jpg";
import coltonImg from "../components/images/colton_carvalho.jpg";
import moshImg from "../components/images/Resized Photo for Profile Picture.jpg";
import vsImg from "../components/images/Vstat.jpg";
import smImg from "../components/images/ShafiiMohammedPic.jpg";
import AboutCard from '../components/AboutCard';
import Master from "../components/images/Masterpiece.png"

const About = () => {
  return (
    
    <Container maxWidth="xxl">
      <Box
        sx={{
          m: 1,
          p: 2,
          height: 130,

        }}
      >
        <Typography 
          variant = "h3" 
          component="div"
          textAlign="center"
          fontSize={90}
          fontWeight="bold"
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
              aboutInfo={"Back End & Front End (Data Processing/Storage, Authentication, Face Comparison, pages, etc)."}
              email={"brianbeilby98@gmail.com"}
            />
          </Grid>
          <Grid item xs="auto">
            <AboutCard 
              imgPath={moshImg}
              name={"Moshley Marcelo"}
              aboutInfo={"Worked on the backend code for the edit button alongside Colton, created the About us part of the project, worked on inserting photos, etc."}
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
              imgPath={Master}
              name={"Alexzander Kemble"}
              aboutInfo={"Front End (dark mode, pages, etc)"}
              email={"akemble@csus.edu"}
            />
          </Grid>
          <Grid item xs="auto">
            <AboutCard 
              imgPath={smImg}
              name={"Shafii Mohammed"}
              aboutInfo={"Front End (Logo, pages, etc)"}
              email={"shafii5703@gmail.com"}
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
      <div className = "Company">
          About Us
      </div>
      <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: 1/2,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
      }}>
        <div className = "Description">
          Back around September 11th, 2001, while the people in our country, the United States of America, were enjoying normal lives, with everyone either at work or school or visiting familiar landmarks & attractions, the country was under attack. The incidents that happened at the World Trade Center, the Pentagon, & in a field near Stonycreek Township, Pennsylvania have changed & shook the country forever. Many lives consisting of Airline Passengers, Airline Pilots & Stewards, Office Workers, Tourists, & most notably first responders (Police Officers, Firefighters, & Paramedics) were lost as a result of this tragic day, all in the act of terrorism. As a result in 2002, the Homeland Security Act was written & after it passed the U.S House of Representatives and the U.S. Senate, the bill was signed on November 25, 2002. The U.S. Department of Homeland Security was established due to that bill, which helped add more security to our nation's borders, seaports, & airports. Their mission has been a success, and they have over the years since its founding have evolved over time as more self service passport control machines were installed for faster identification to the U.S. & more airports adopted the TSA Pre-Check which helped decrease wait times & added more efficiency to the airport security checkpoints. Their mission has been a success & we as Travel-X have helped ensure that mission is preserved. We have established ourselves as another potential guiding force in assisting the U.S. Department of Homeland Security in ensuring that everyone’s identity is found & secured, while also providing faster lines & better efficiency towards those that live or visit our beloved country. We also do our best to help the passengers affected due to not having a passport, as coming to another country without a passport can lead to delays in arrival & can lead to a hefty fine at the immigration counter. With that, Travel-X is a huge mediator on both the passenger’s side & the U.S. Department of Homeland Security’s side. We strive to be the best company & we plan to do so for many years & generations.
        </div>
      </Box>
    </Container>
   


  );
};

export default About;
