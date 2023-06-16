import { CardMedia } from "@mui/material";
import stats from "../data/miamiHeat.json";

const Pfp = ({ nbaId }) => {
  const photoUrl = stats.depthChart
    .flatMap(({ players }) => players)
    .find(
      (player) => player && player.nbaId === nbaId && player.photoUrl
    )?.photoUrl;
  return (
    <CardMedia
      component="div"
      sx={{
        pt: "56.25%",
        backgroundColor: "#98002E"
      }}
      image={photoUrl}
    />
  );
};
export default Pfp;
