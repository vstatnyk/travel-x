import React from "react";
import background from ".././components/background.png";

const Home = () => {
  return (
      <div>
        <img src={background} alt="TravelX Logo" className="logoHome"></img>
        <div className="homeText">
          <h1>Welcome to TravelX</h1>
        </div>
      </div>
  );
};

export default Home;
