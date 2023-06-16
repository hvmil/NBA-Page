import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import Filter3Icon from "@mui/icons-material/Filter3";
import SportsIcon from "@mui/icons-material/Sports";
import stats from "../data/miamiHeat.json";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const Stats = ({ nbaId }) => {
  const player = stats.boxScorePerGame.find((player) => player.nbaId === nbaId);
  const salary = stats.salaries.find(player => player.nbaId === nbaId)
  
  return (
    <List>
      <ListItem disablePadding divider>
        <ListItemIcon>
          <SportsBasketballIcon />
        </ListItemIcon>
        <ListItemText primary="Points Per Game:" />
        {player.ppg}
      </ListItem>
      <ListItem disablePadding divider>
        <ListItemIcon>
          <SportsScoreIcon />
        </ListItemIcon>
        <ListItemText primary="Field Goal % :" />
        {player["fg%"]}
      </ListItem>
      <ListItem disablePadding divider>
        <ListItemIcon>
          <Filter3Icon />
        </ListItemIcon>
        <ListItemText primary="3 Point % :" />
        {player["tp%"]}
      </ListItem>
      <ListItem disablePadding divider>
        <ListItemIcon>
          <SportsIcon />
        </ListItemIcon>
        <ListItemText primary="Free Throw % :" />
        {player["ft%"]}
      </ListItem>
      <ListItem disablePadding divider>
        <ListItemIcon>
          <AirlineStopsIcon />
        </ListItemIcon>
        <ListItemText primary="Rebounds :" />
        {player["reb"]}
      </ListItem>
      <ListItem disablePadding divider>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary="Salary :" />
        {salary && salary.cap1 ? '$' + new Intl.NumberFormat().format(salary.cap1) : 'N/A'}
      </ListItem>
    </List>
  );
};

export default Stats;
