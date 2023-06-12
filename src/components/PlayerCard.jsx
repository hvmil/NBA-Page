import {
  CardActionArea,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Stats from "./Stats";
import { useState, useEffect } from "react";
import Pfp from "./Pfp";
import Sorting from "./Sorting";


const PlayerCards = ({ team, stat }) => {
  const [sortOption, setSortOption] = useState("ppg");
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleSort = (option) => {
    setSortOption(option);
  };
  const sortedPlayers = [...team.boxScorePerGame].sort((a, b) => {
    switch (sortOption) {
      case "ppg":
        return b.ppg - a.ppg;
      case "fg%":
        return b["fg%"] - a["fg%"];
      case "tp%":
        return b["tp%"] - a["tp%"];
      case "ft%":
        return b["reb"] - a["reb"];
      default:
        return 0;
    }
  });
  useEffect(() => {
    if (selectedPlayer) {
      console.log(selectedPlayer.nbaId);
    }
  }, [selectedPlayer]);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Sorting handleSort={handleSort} />

      <Grid container spacing={4}>
        {sortedPlayers.map((player) => (
          <Grid item key={player.nbaId} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
              onClick={() => setSelectedPlayer(player)}
            >
              <CardActionArea>
                <Pfp nbaId={player.nbaId} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {player.name}
                  </Typography>

                  <Stats nbaId={player.nbaId} />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default PlayerCards;
