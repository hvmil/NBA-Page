import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import Filter3Icon from '@mui/icons-material/Filter3';
import SportsIcon from '@mui/icons-material/Sports';
import stats from '../data/miamiHeat.json'

const Stats = ({ nbaId }) => {

    const player = stats.boxScorePerGame.find((player) => player.nbaId === nbaId);
    // if (player) {
    //     const playerName = player.name; // Retrieve the value from the 'name' property
    //     console.log(`Player Name: ${playerName} & ${player.ppg}` );
    //   } else {
    //     console.log(`Player with ID ${nbaId} not found.`);
    //   }
    return (

        <List>
            <ListItem disablePadding divider>
                <ListItemIcon>
                    <SportsBasketballIcon />
                </ListItemIcon>
                <ListItemText primary="Points Per Game:" />{player.ppg}
            </ListItem>
            <ListItem disablePadding divider>
                <ListItemIcon>
                    <SportsScoreIcon />
                </ListItemIcon>
                <ListItemText primary="Field Goal % :" />{player["fg%"]}
            </ListItem>
            <ListItem disablePadding divider>
                <ListItemIcon>
                    <Filter3Icon />
                </ListItemIcon>
                <ListItemText primary="3 Point % :" />{player["tp%"]}
            </ListItem>
            <ListItem disablePadding divider>
                <ListItemIcon>
                    <SportsIcon />
                </ListItemIcon>
                <ListItemText primary="Free Throw % :" />{player["ft%"]}
            </ListItem>
            <ListItem disablePadding divider>
                <ListItemIcon>
                    <SportsIcon />
                </ListItemIcon>
                <ListItemText primary="Free Throw % :" />{player["ft%"]}
            </ListItem>
        </List>

    );
}

export default Stats