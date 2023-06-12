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
        // 16:9
        pt: "56.25%",
      }}
      image={photoUrl}
    />
  );
};
export default Pfp;
