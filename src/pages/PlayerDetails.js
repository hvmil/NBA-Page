import { useState } from "react";
import oladipo from "../data/oladipo.json";
import ScoutingReport from "../components/ScoutingReport";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
  Typography,
  CardMedia,
  Card,
} from "@mui/material/";

function createData(
  timePlayed,
  points,
  assists,
  rebounds,
  season,
  seasonType,
  fg,
  pf
) {
  return { timePlayed, points, assists, rebounds, season, seasonType, fg, pf };
}
const gameLogs = oladipo.gameLog.filter((log) => log.timePlayed !== "0:00");

const rows = gameLogs.map((log) =>
  createData(
    log.timePlayed,
    log.pts,
    log.ast,
    log.reb,
    log.season,
    log.seasonType,
    log["fg%"],
    log.pf
  )
);

const PlayerDetails = ({ player }) => {
  const [season, setSeason] = useState("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const logsToShow =
    season === "all" ? rows : rows.filter((log) => log.season === season);

  return (
    <div>
      <Typography variant="h1" color="white" sx={{ textAlign: "center" }}>
        {oladipo.bio[0].name}
      </Typography>
      <div style={{display:'flex', justifyContent:'center'}}>
        <Card sx={{ width: "40%" }}>
          <CardMedia
            component="div"
            sx={{
              pt: "56.25%",
              backgroundColor: "#98002E",
            }}
            image={oladipo.bio[0].photoUrl}
          />
        </Card>
      </div>
      <div>
        <ScoutingReport />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5vh",
        }}
      >
        <h1 style={{ color: "white" }}>Game Logs</h1>
      </div>

      <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
            <Select
              displayEmpty
              id="season-sort"
              value={season}
              input={<OutlinedInput />}
              label="Season"
              onChange={handleSeasonChange}
              renderValue={(selected) => {
                if (season === "all") {
                  return <em>Season</em>;
                }

                return season;
              }}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={2023}>2023</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
              <MenuItem value={2019}>2019</MenuItem>
              <MenuItem value={2018}>2018</MenuItem>
              <MenuItem value={2017}>2017</MenuItem>
              <MenuItem value={2016}>2016</MenuItem>
              <MenuItem value={2015}>2015</MenuItem>
              <MenuItem value={2014}>2014</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="player-table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Season</TableCell>
                <TableCell align="right">Season Type</TableCell>
                <TableCell align="right">Time Played</TableCell>
                <TableCell align="right">Field Goal%</TableCell>
                <TableCell align="right">Points</TableCell>
                <TableCell align="right">Assists</TableCell>
                <TableCell align="right">Rebounds</TableCell>
                <TableCell align="right">Personal Fouls</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {logsToShow
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="left">{row.season}</TableCell>
                    <TableCell align="right">{row.seasonType}</TableCell>
                    <TableCell align="right">{row.timePlayed}</TableCell>
                    <TableCell align="right">{row.fg}</TableCell>
                    <TableCell align="right">{row.points}</TableCell>
                    <TableCell align="right">{row.assists}</TableCell>
                    <TableCell align="right">{row.rebounds}</TableCell>
                    <TableCell align="right">{row.pf}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={logsToShow.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
    </div>
  );
};
export default PlayerDetails;
