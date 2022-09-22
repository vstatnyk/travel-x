import Header from "./components/Header";
import EntryBox from "./components/EntryBox";
import background from "./components/background.png";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      
      <Header title='Welcome to Travel X'/>
      <img src = {background} alt = 'background'/>
      <EntryBox text = "Enter SSN Here: "/>
    </div>
  );
}

export default App;
