import { Button, Container } from "@mui/material";

const Sorting = ({ handleSort }) => {
  return (
    <Container>
      <Button
        sx={{ m: 2 }}
        variant="contained"
        onClick={() => handleSort("ppg")}
      >
        Sort by PPG
      </Button>
      <Button
        sx={{ m: 2 }}
        variant="contained"
        onClick={() => handleSort("fg%")}
      >
        Sort by FG%
      </Button>
      <Button
        sx={{ m: 2 }}
        variant="contained"
        onClick={() => handleSort("tp%")}
      >
        Sort by TP%
      </Button>
      <Button
        sx={{ m: 2 }}
        variant="contained"
        onClick={() => handleSort("ft%")}
      >
        Sort by FT%
      </Button>
    </Container>
  );
};
export default Sorting;
