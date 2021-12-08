import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import App from './App';

const theme = createTheme({
    props: {
        MuiListItem: {
            dense: true,
        },
        MuiTextField: {
            fullWidth: true,
            variant: 'filled',
            size: 'small',
            SelectProps: { native: true },
        },
        MuiInputLabel: { 

        }
    },
    overrides: {
        MuiTextField: {
            root: {
                marginTop: '16px'
            },
        },
    },
});

export default function AppWrapper() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router basename='/app'>
                <Route component={App}/>
            </Router>
        </ThemeProvider>
    )
}






















