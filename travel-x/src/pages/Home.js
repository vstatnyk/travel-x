import { Container } from '@mui/system';
import * as React from 'react';
import logo from ".././components/images/X_black.gif";

const Home = () => {
  return (
      <Container maxWidth="lg">
        <img src={logo} alt="TravelX Logo" height={700} width={700} className="logoHome"></img>
        <div className="homeText">
          <h1>Welcome to TravelX</h1>
        </div>
      </Container>
  );
};

export default Home;
