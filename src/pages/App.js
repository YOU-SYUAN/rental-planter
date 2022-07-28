import "./App.css";
import background from "../assets/work.png";
import Intro from "./Intro";
import State from "./State";
import Navbar from "./Navbar";
import { Grid, Button } from "@mui/material";
import Showplant from "./Showplant";
import RentalSticker from "./Rentalsticker";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
function App() {
  const imgPaths = [card1, card2, card3, card4];
  return (
    <div className="App">
      <Navbar></Navbar>

      <div
        class="w-full 
        h-[720px]
        tablet:h-[432px]
        phone:h-[360px]"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Grid container direction="row" spacing={2}>
          <Grid item xs={5}>
            <div></div>
          </Grid>
          <Grid
            item
            xs={7}
            style={{ textAlign: "left" }}
            class="mt-[229px] tablet:mt-[124.29px] phone:mt-[128px]"
          >
            <div class="text-[100px] text-white tablet:text-[54px] phone:text-[32px] ">
              Rental Planter
            </div>
            <div class="text-[20px] text-white tablet:text-[16px] phone:text-[12px]">
              用心愛護你的植物
            </div>
            <Button class="bg-[#519E75] rounded-lg mt-4 w-[136px] h-[60px] tablet:w-[96px] tablet:h-[48px] text-white phone:w-[88px] phone:h-[48px] phone:text-[12px]">
              立即預約
            </Button>
          </Grid>
        </Grid>
      </div>
      <Intro></Intro>
      <State></State>
      <h1 class=" text-center pt-20 font-extrabold text-[44px] tablet:text-[20px] phone:text-[18px] tablet:pt-0">
        會員植物
      </h1>
      <div class="flex flex-wrap flex-row justify-center mt-[60px] mb-20 tablet:mb-10 text-center tablet:ml-10 tablet:mt-0 tablet:mb-10">
        {imgPaths.map((item) => (
          <Showplant key={item} path={item}></Showplant>
        ))}
      </div>
      <RentalSticker></RentalSticker>
    </div>
  );
}

export default App;
