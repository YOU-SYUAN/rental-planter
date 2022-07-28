import { Typography } from "@mui/material";
import plant2 from "../assets/plant2.png";
import light from "../assets/light.png";
import humid from "../assets/humid.png";
function State() {
  return (
    <div class="mt-[60px] justify-center tablet:pt-5 tablet:mt-0 phone:mt-4">
      <div class="justify-center">
        <div>
          <h1 class=" text-center font-extrabold text-[44px] tablet:text-[20px] phone:text-[18px]">
            盆栽狀態
          </h1>
        </div>
        <div class=" w-full h-[307.64px] flex flex-row justify-center mt-20 mb-20 tablet:h-[264.59px] tablet:mt-0 tablet:mb-10 phone:mt-10 phone:h-full">
          <div class="flex justify-center w-[1560px] phone:flex-wrap">
            <div class="pt-10 pb-10 flex flex-col justify-center  tablet:pr-10 phone:py-4">
              <div class="flex flex-row">
                <img src={humid} class="w-12 h-12 mr-4 mt-4"></img>
                <div>
                  <h2 class="font-bold text-[48px] tablet:text-[24px] phone:text-[20px]">
                    48%
                  </h2>
                  <h5 class="text-[20px] tablet:text-[14px] phone:text-[12px]">
                    土壤濕度
                  </h5>
                </div>
              </div>
              <div class="flex flex-row">
                <img src={light} class="w-12 h-12 mr-4 mt-4"></img>
                <div>
                  <h2 class="font-bold text-[48px] tablet:text-[24px] phone:text-[20px]">
                    100
                  </h2>
                  <h5 class="text-[20px] tablet:text-[14px] phone:text-[12px]">
                    光照強度
                  </h5>
                </div>
              </div>
            </div>
            <div class="phone:flex justify-center phone:mt-0">
              <img
                src={plant2}
                class="mx-[160px] tablet:w-[240px] tablet:h-[184.59px] tablet:mx-4 tablet:my-10 phone:w-[200px] phone:h-[153.82px]"
              ></img>
            </div>
            <div class=" tablet:mt-[17.29px] tablet:pl-5">
              <div class="flex flex-row phone:justify-center">
                <Typography class="mt-10 font-bold text-[32px] tablet:text-[20px] phone:text-[16px]">
                  蘆薈
                </Typography>
                <Typography class="text-center mt-12 ml-20 text-[#6B7280] text-[24px] tablet:text-[14px] tablet:ml-10 phone:text-[14px] phone:ml-4">
                  暱稱
                </Typography>
              </div>
              <Typography class="mt-8 w-[219px] text-[#6B7280]  text-[20px] tablet:text-[14px] tablet:w-[151px] tablet:mt-5 phone:w-[200px] phone:h-[84px] ">
                Maecenas dapibus augue eu magna placerat, eget volutpat urna
                aliquam.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default State;
