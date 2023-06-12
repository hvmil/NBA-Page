import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#141b2d"
    },
    secondary: {
      main:"#4cceac"
    },
    neutral: {
      dark: "#3d3d3d",
      main: "#666666",
      light: "#e0e0e0",
    },
    background: {
      default: "#141b2d",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
