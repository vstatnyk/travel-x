import Header from "./components/Header";
import EntryBox from "./components/EntryBox";
// import background from "./components/background.png";
import * as React from 'react';

function App() {
  return (
    <div className = "App">
      <Header title='Welcome to Travel X' />
      <EntryBox text = "Enter SSN Here: "/>
    </div>
  );
}

export default App;
