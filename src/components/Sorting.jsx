import {
  Container,
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";

const Sorting = ({ handleSort }) => {
  const [sortBy, setSortBy] = useState("");

  const handleChange = (event) => {
    setSortBy(event.target.value);
    handleSort(event.target.value);
  };

  return (
    <Container sx={{display:'flex', justifyContent:'flex-end', margin:0}}>
      <FormControl sx={{ m: 1, width: 200}}>
        <Select
          displayEmpty
          labelId="demo-simple-select-label"
          input={<OutlinedInput />}
          id="demo-simple-select"
          value={sortBy}
          label="Sort By"
          onChange={handleChange}
          renderValue={(sortBy) => {
            if (sortBy === "") {
              return <em>Sort By</em>;
            }

            return sortBy.toUpperCase();
          }}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={"ppg"}>Points Per Game</MenuItem>
          <MenuItem value={"fg%"}>Field Goal%</MenuItem>
          <MenuItem value={"tp%"}>Three Point%</MenuItem>
          <MenuItem value={"reb"}>Rebounds</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
};
export default Sorting;
