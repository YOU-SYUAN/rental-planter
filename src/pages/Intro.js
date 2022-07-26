import { Typography } from "@mui/material";
import logo from "../assets/plant.png";
function Intro() {
  return (
    <div class=" flex flex-row mt-16 justify-center">
      <div class="pr-[70px]">
        <img src={logo} class="h-[500.45px] w-[640px] pb-[70px]"></img>
      </div>
      <div class="mt-9 ml-[60px] pl-8">
        <Typography style={{ fontSize: 28 }}>Monospace</Typography>
        <Typography style={{ fontSize: 44 }}>盆器租借系統</Typography>
        <ul class="list-disc leading-10" style={{ fontSize: 20 }}>
          <li>土壤溼度感測</li>
          <li>光照強度感測</li>
          <li>光照開關控制</li>
          <li>預約盆器租借</li>
          <li>租竊盆器遞補通知</li>
        </ul>
        <Typography class="mt-5" style={{ fontSize: 20 }}>
          打造自動化系統，隨時檢測植物生長環境，讓你的植物安心生長。
        </Typography>
      </div>
    </div>
  );
}
export default Intro;
