import * as React from "react";
import { AppBar, CssBaseline, Toolbar } from "@mui/material";
import team from "./data/miamiHeat.json";
import PlayerCard from "./components/PlayerCard";
import { Routes, Route, Link, useLocation} from "react-router-dom";
import PlayerDetails from "./pages/PlayerDetails";
import { useState, useEffect } from "react";


function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [player, setPlayer] = useState("");
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" sx={{ backgroundColor: "#98002E" }}>
        <Toolbar
          sx={{
            margin: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <img
              style={{ width: "200px" }}
              src="https://www.pngmart.com/files/22/Miami-Heat-PNG-Photo.png"
              alt="Miami Heat Logo"
            />
          </Link>
        
        </Toolbar>
      </AppBar>
      <main>
      <ScrollToTopOnNavigate />
        <div>
          <Routes>
            <Route
              path="/"
              element={<PlayerCard team={team} setPlayer={setPlayer} />}
            />
            <Route path="/player" element={<PlayerDetails player={player} />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
