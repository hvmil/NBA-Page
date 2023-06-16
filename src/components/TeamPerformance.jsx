import { useState } from "react";
import team from "../data/miamiHeat.json";
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
} from "@mui/material/";

function createData(
  season,
  seasonType,
  offensiveRating,
  defensiveRating,
  effectiveGoal,
  turnover,
  offensiveRebound,
  defensiveRebound
) {
  return {
    season,
    seasonType,
    offensiveRating,
    defensiveRating,
    effectiveGoal,
    turnover,
    offensiveRebound,
    defensiveRebound,
  };
}

const rows = team.stats.map((log) =>
  createData(
    log.season,
    log.seasonType,
    log["OFF RTG"],
    log["DEF RTG"],
    log["EFG%"],
    log["TO%"],
    log["OFF REB%"],
    log["DREB%"]
  )
);

const TeamPerformance = ({ player }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [seasonType, setSeasonType] = useState("all");

  const logsToShow =
    seasonType === "all"
      ? rows
      : rows.filter((log) => log.seasonType === seasonType);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleSeasonChange = (event) => {
    setSeasonType(event.target.value);
  };

  return (
    <div>
      <div>
        <div>
           <Typography variant="h2" sx={{mt:12, color:"white"}}>
                Team Logs
           </Typography>
        </div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{ m: 1, width: 200, mt: 3 }}>
            <Select
              displayEmpty
              id="season-sort"
              value={seasonType}
              input={<OutlinedInput />}
              label="Season Type"
              onChange={handleSeasonChange}
              renderValue={(selected) => {
                if (seasonType === "all") {
                  return <em>Season Type</em>;
                }

                return seasonType;
              }}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"Regular"}>Regular</MenuItem>
              <MenuItem value={"Playoff"}>PlayOff</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Season</TableCell>
                  <TableCell align="right">Season Type</TableCell>
                  <TableCell align="right">Offensive Rating</TableCell>
                  <TableCell align="right">Defensive Rating</TableCell>
                  <TableCell align="right">Effective Goal</TableCell>
                  <TableCell align="right">Turnovers</TableCell>
                  <TableCell align="right">Offensive Rebounds</TableCell>
                  <TableCell align="right">Defensive Rebounds</TableCell>
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
                      <TableCell align="right">{row.offensiveRating}</TableCell>
                      <TableCell align="right">{row.defensiveRating}</TableCell>
                      <TableCell align="right">{row.effectiveGoal}</TableCell>
                      <TableCell align="right">{row.turnover}</TableCell>
                      <TableCell align="right">
                        {row.offensiveRebound}
                      </TableCell>
                      <TableCell align="right">
                        {row.defensiveRebound}
                      </TableCell>
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
    </div>
  );
};
export default TeamPerformance;
