import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#F9A01B !important",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: "#F9A01B !important",
        },
      },
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#141b2d",
    },
    secondary: {
      main: "#F9A01B",
    },
    neutral: {
      dark: "#3d3d3d",
      main: "#666666",
      light: "#e0e0e0",
    },
    background: {
      default: "#012622",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
