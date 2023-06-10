import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material"
import Stats from "./Stats";
import { useState, useEffect } from "react";
import PlayerDetails from "./PlayerDetails"


const PlayerCards = ({ players, stat }) => {
  return (

    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {players.map((player) => (
          <Grid item key={player.nbaId} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="div"
                sx={{
                  // 16:9
                  pt: '56.25%',
                }}
                image={player.photoUrl}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {player.firstName} {player.lastName}
                </Typography>

                <Stats nbaId={player.nbaId} />

              </CardContent>
              <CardActions>
                <PlayerDetails player={player} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
export default PlayerCards