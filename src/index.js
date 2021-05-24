import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {BrowserRouter} from "react-router-dom";
import {grey, red} from "@material-ui/core/colors";

const theme = createMuiTheme({
    typography: {
        fontFamily: "Quicksand"
    },
    palette: {
        primary: {
            main: red["700"],
            light: red["500"],
            dark: red["900"]
        },
        secondary: {
            main: red["700"],
            light: red["500"],
            dark: red["900"]
        },
        text: {
            primary: grey["200"],
            secondary: grey["400"],
            hint: grey["400"],
            disabled: grey["400"]
        },
        background: {
            paper: "#ffffff",
            default: "#e5f1f0"
        },
        action: {
            hover: red["A700"],
            focus: red["900"],
            selected: red["800"],
            selectedOpacity: 0.6,
            focusOpacity: 0.6,
            hoverOpacity: 0.4,
            active: red["500"],
            disabled: red["50"],
            activatedOpacity: 0.5,
            disabledBackground: 0.4,
            disabledOpacity: 0.2
        }
    },
    shape: {
        borderRadius: 0
    }
});

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
