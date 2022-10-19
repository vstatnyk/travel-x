import Header from "./components/Header";
import EntryBox from "./components/EntryBox";
// import background from "./components/background.png";
//import PersonCard from "./components/personCard";
import * as React from 'react';
import { CssBaseline, ThemeProvider, createTheme, FormControlLabel, Switch } from "@mui/material";

const DarkModeContext = React.createContext({toggleDarkMode: () => {} });

export function DarkModeButton(){
  const darkMode = React.useContext(DarkModeContext);
  return(
      <FormControlLabel label = 'Dark Mode' control = {<Switch/>} onChange ={darkMode.toggleDarkMode} />
  );
}

function App() {
  const [mode, setMode] = React.useState('light');
  
  const darkMode = React.useMemo(
    () => ({
        toggleDarkMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
    }),
    [],
  );

  const theme = React.useMemo(
    () => createTheme({
        palette: {
            mode,
        },
    }),
    [mode],
  );

  return (
    <DarkModeContext.Provider value={darkMode}>
      <ThemeProvider theme = {theme} >
        <CssBaseline/>
        <div className = "App">
          <Header title='Welcome to Travel X' />
          <EntryBox text = "Enter SSN Here: "/>
        </div>
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
}

export default App;
