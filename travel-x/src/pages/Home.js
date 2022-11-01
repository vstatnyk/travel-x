import { Container } from '@mui/system';
import * as React from 'react';
import background from ".././components/images/background.png";

const Home = () => {
  return (
      <Container maxWidth="lg">
        <img src={background} alt="TravelX Logo" className="logoHome"></img>
        <div className="homeText">
          <h1>Welcome to TravelX</h1>
        </div>
      </Container>
  );
};

export default Home;
