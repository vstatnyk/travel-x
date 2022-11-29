import { Container } from '@mui/system';
import * as React from 'react';
import darkLogo from ".././components/images/X_black.gif";
import lightLogo from ".././components/images/X_white.gif";
import { isLightMode } from '../App';

const Home = () => {
  return (
      <Container maxWidth="lg">
        <img src = {isLightMode() ? darkLogo : lightLogo} alt="TravelX Logo" height={700} width={700} className="logoHome"></img>
        <div className="homeText">
          <h1>Welcome to TravelX</h1>
        </div>
      </Container>
  );
};

export default Home;
