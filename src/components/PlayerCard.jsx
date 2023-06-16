import {
  CardActionArea,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Stats from "./Stats";
import { useState } from "react";
import Pfp from "./Pfp";
import Sorting from "./Sorting";
import { Link } from "react-router-dom";
import TeamPerformance from "./TeamPerformance"

const PlayerCard = ({ team, setPlayer }) => {
  const [sortOption, setSortOption] = useState("ppg");

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
      case "reb":
        return b["reb"] - a["reb"];
      default:
        return 0;
    }
  });

  return (
    <Container sx={{ py: 8}} maxWidth="md">
      <Typography variant="h2" color="white"> Roster</Typography>
      <Sorting handleSort={handleSort} />
      <Grid container spacing={4} sx={{marginTop:'1px'}}>
        {sortedPlayers.map((player) => (
          <Grid item key={player.nbaId} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
              onClick={() => setPlayer(player.nbaId)}
            >
              <CardActionArea component={Link} to={"/player"}>
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
      <TeamPerformance/>
    </Container>
  );
};
export default PlayerCard;
