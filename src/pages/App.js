import "./App.css";
import Button from "@mui/material/Button";
import Background from "../assets/work.png";
import Intro from "./Intro";
import State from "./State";
import Navbar from "./Navbar";
import { Grid } from "@mui/material";
import { borderRadius, margin } from "@mui/system";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div style={{ backgroundImage: `url(${Background})`, height: "720px" }}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={5}>
            <div></div>
          </Grid>
          <Grid item xs={7} style={{ textAlign: "left" }} sx={{ mt: 25 }}>
            <div style={{ fontSize: 100, color: "white" }}>Rental Planter</div>
            <div style={{ fontSize: 20, color: "white" }}>用心愛護你的植物</div>
            <Button
              sx={{ mt: 4 }}
              variant="contained"
              style={{ background: "#519E75", borderRadius: "8px" }}
            >
              立即預約
            </Button>
          </Grid>
        </Grid>
      </div>
      <Intro></Intro>
      <State></State>
    </div>
  );
}

export default App;
