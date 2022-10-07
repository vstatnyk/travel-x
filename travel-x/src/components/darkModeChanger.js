import * as React from 'react';
import { FormControlLabel, Switch, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const DarkModeContext = React.createContext({toggleDarkMode: () => {} });

function DarkModeButton(){
    const darkMode = React.useContext(DarkModeContext);
    return(
        <FormControlLabel label = 'Dark Mode' control = {<Switch/>} onChange ={darkMode.toggleDarkMode} />
    );
}

export default function ToggleDarkMode() {
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
            <ThemeProvider theme = {theme}>
                <CssBaseline />
                <DarkModeButton />
            </ThemeProvider>
        </DarkModeContext.Provider>
    );
}