import { Typography } from "@mui/material";
import plant from "../assets/plant.png";
function Intro() {
  return (
    <div class=" flex flex-row justify-center phone:flex-wrap ">
      <div class="pr-[70px] mt-[60px] pt-[70px] tablet:px-10 tablet:py-[71px] tablet:mt-4 phone:pr-[10px] phone:mt-[46px] phone:mx-5 phone:pt-0">
        <img
          src={plant}
          class="h-[500.45px] w-[640px] pb-[70px] tablet:w-[280px] tablet:h-[218.95px] tablet:pb-5 phone:w-[240px] phone:h-[187.67px] phone:pb-[26.33px] phone:px-[47.5px]"
        ></img>
      </div>
      <div class="mt-[60px] ml-[60px] pl-8 pt-[104px] tablet:mt-5 tablet:pt-[31px] tablet:ml-5 phone:pt-0 phone:mt-0">
        <Typography class="Nova Flat text-[28px] tablet:text-[12px] ">
          Monospace
        </Typography>
        <Typography class="font-extrabold text-[44px] tablet:text-[20px] tablet:mt-2 phone:text-[18px]">
          盆器租借系統
        </Typography>
        <ul class="list-disc leading-10 text-[20px] tablet:text-[14px] tablet:leading-7 tablet:mt-5 phone:text-[14px] phone:leading-5">
          <li>土壤溼度感測</li>
          <li>光照強度感測</li>
          <li>光照開關控制</li>
          <li>預約盆器租借</li>
          <li>租竊盆器遞補通知</li>
        </ul>
        <Typography class="mt-5 text-[20px] tablet:text-[14px] tablet:mt-6 phone:text-[14px] ">
          打造自動化系統，隨時檢測植物生長環境，讓你的植物安心生長。
        </Typography>
      </div>
    </div>
  );
}
export default Intro;
