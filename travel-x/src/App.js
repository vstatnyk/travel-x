import Header from "./components/Header";
import EntryBox from "./components/EntryBox";

function App() {
  return (
    <div className="App">
      <Header title='Welcome to TravelX'/>
      <EntryBox text = "Enter SSN Here: "/>
    </div>
  );
}

export default App;
