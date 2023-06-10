import * as React from 'react';
import { Button, Container, Typography, AppBar, Card, CardMedia, CssBaseline, Grid, Toolbar } from "@mui/material";
import team from './data/miamiHeat.json'
// import player from './data/oladipo.json'
import PlayerCards from "./components/PlayerCard";


// const photoUrls = team.depthChart.flatMap(obj =>
//   obj.players.map(player => player && player.photoUrl)
// ).filter(photoUrl => photoUrl);
// team.depthChart.flatMap(obj => obj.players.map(player => player))

const players = team.depthChart.flatMap(obj => obj.players.filter(player => player !== null).map(player => player));

// const boxScorePerGame = team.boxScorePerGame;

// const combinedBoxScore = {};

// for (const player of boxScorePerGame) {
//   const playerId = player.nbaId;
//   if (!combinedBoxScore[playerId]) {
//     combinedBoxScore[playerId] = { ...player };
//   } else {
//     // Combine the stats with the existing player entry
//     const existingPlayer = combinedBoxScore[playerId];
//     for (const stat in player) {
//       if (stat !== 'nbaId' && stat !== 'name') {
//         existingPlayer[stat] += player[stat];
//       }
//     }
//   }
// }

// // Output the combined box score
// console.log(combinedBoxScore);



function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">
            Miami Heat
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h2" mt={2} align="center" color="textPrimary"  gutterBottom >
              Roster
            </Typography>
          </Container>
          <PlayerCards players={players} />
        </div>
      </main>
    </>

  );
}

export default App;
