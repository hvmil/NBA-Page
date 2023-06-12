import * as React from "react";
import {
  Container,
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
} from "@mui/material";
import team from "./data/miamiHeat.json";
// import player from './data/oladipo.json'
import PlayerCards from "./components/PlayerCard";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">Miami Heat</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="xl">
            <Typography
              variant="h2"
              mt={2}
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Roster
            </Typography>
          </Container>
          <PlayerCards team={team} />
        </div>
      </main>
    </>
  );
}

export default App;
