// import background from "./components/background.png";
//import PersonCard from "./components/personCard";
import * as React from 'react';
import { CssBaseline, ThemeProvider, createTheme, FormControlLabel, Switch } from "@mui/material";
import Navbar from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from './pages/Home';

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
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' exact element={<Home/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Search' element={<Search/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/About' element={<About/>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
}

export default App;
