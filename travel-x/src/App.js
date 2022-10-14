import Header from "./components/Header";
import EntryBox from "./components/EntryBox";
// import background from "./components/background.png";
import PersonCard from "./components/personCard";
import * as React from 'react';

function App() {
  return (
    <div className = "App">
      <Header title='Welcome to Travel X' />
      <EntryBox className="TextBox"text = "Enter SSN Here: "/>
      {/* <PersonCard text = "sample id" dept = "DMV"/> */}
    </div>
  );
}

export default App;
