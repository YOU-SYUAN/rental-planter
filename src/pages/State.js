import { Typography } from "@mui/material";
import plant2 from "../assets/plant2.png";
import light from "../assets/light.png";
import humid from "../assets/humid.png";
function State() {
  return (
    <div class="mt-[60px]  justify-center">
      <div>
        <h1 class="text-center" style={{ fontSize: 44 }}>
          盆栽狀態
        </h1>
      </div>
      <div class=" w-[1560px] h-[307.64px] flex flex-row justify-center mt-20 ml-[381px] mr-[180px]">
        <div class="pr-[120px] pl-[201px] pt-10 pb-10">
          <div>
            <div class="flex flex-row">
              <img src={humid} class="w-12 h-12 mr-4 mt-4"></img>
              <div>
                <h2 style={{ fontSize: 48 }}>48%</h2>
                <h5 style={{ fontSize: 20 }}>土壤濕度</h5>
              </div>
            </div>
            <div class="flex flex-row">
              <img src={light} class="w-12 h-12 mr-4 mt-4"></img>
              <div>
                <h2 style={{ fontSize: 48 }}>100</h2>
                <h5 style={{ fontSize: 20 }}>光照強度</h5>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={plant2} class="mr-[120px] pl-10 pr-10"></img>
        </div>
        <div>
          <div class="flex flex-row">
            <Typography class="mt-10" style={{ fontSize: 32 }}>
              植物名稱
            </Typography>
            <Typography
              class="text-center mt-11 ml-2 text-[#6B7280]"
              style={{ fontSize: 24 }}
            >
              暱稱
            </Typography>
          </div>
          <Typography class="mt-8 w-[219px]" style={{ fontSize: 20 }}>
            植物介紹植物介紹植物介紹植物介紹植物介紹植物介紹植物介紹植物介紹
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default State;
