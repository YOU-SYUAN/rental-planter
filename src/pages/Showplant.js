import { Typography } from "@mui/material";

function Showplant(props) {
  return (
    <div class="mt-[60px] flex flex-wrap justify-center ">
      {/* <div class="flex flex-wrap flex-row justify-center mt-[60px] mb-20 text-center "> */}
      <div class="rounded-2xl border border-[#E5E7EB] w-[304px] h-[531px] flex justify-center mr-10 tablet:h-[513px]">
        <div class=" w-60 pt-8">
          <img src={props.path}></img>
          <Typography class="font-semibold mt-6 text-[24px] tablet:text-[16px]">
            仙人掌
          </Typography>
          <Typography class="text-[#6B7280] mt-4 text-[18px] tablet:text-[14px]">
            小仙女
          </Typography>
          <Typography class="mt-6 text-left text-[16px] tablet:text-[14px]">
            植物介紹植物介紹植物介紹植物介紹植物介紹植物介紹植物介紹植物介紹
          </Typography>
        </div>
        {/* </div> */}
        {/* <div class="rounded-lg border border-[#E5E7EB] w-[304px] h-[531px] flex justify-center mr-10 tablet:mr-0 tablet:mb-10">
          <div class="w-60 pt-8">
            <img src={card2}></img>
            <Typography class="font-semibold mt-6 text-[24px] tablet:text-[16px]">
              藤蔓
            </Typography>
            <Typography class="text-[#6B7280] mt-4 text-[18px] tablet:text-[14px]">
              小漫
            </Typography>
            <Typography class="mt-6 text-left text-[16px] tablet:text-[14px]">
              植物介紹植物介紹植物介紹植物介紹植物介紹植物介紹植物介紹植物介紹
            </Typography>
          </div>
        </div>
        <div class="rounded-lg border border-[#E5E7EB] w-[304px] h-[531px] flex justify-center mr-10">
          <div class="w-60 pt-8">
            <img src={card3}></img>
            <Typography class="font-semibold mt-6 text-[24px] tablet:text-[16px]">
              玫瑰花
            </Typography>
            <Typography class="text-[#6B7280] mt-4 text-[18px] tablet:text-[14px]">
              小紅
            </Typography>
            <Typography class="mt-6 text-left text-[16px] tablet:text-[14px]">
              植物介紹植物介紹植物介紹植物介紹植物介紹植物介紹植物介紹植物介紹
            </Typography>
          </div>
        </div>
        <div class="rounded-lg border border-[#E5E7EB] w-[304px] h-[531px] flex justify-center mr-10 tablet:mr-0">
          <div class="w-60 pt-8">
            <img src={card4}></img>
            <Typography class="font-semibold mt-6 text-[24px] tablet:text-[16px]">
              向日葵
            </Typography>
            <Typography class="text-[#6B7280] mt-4 text-[18px] tablet:text-[14px]">
              小黃
            </Typography>
            <Typography class="mt-6 text-left text-[16px] tablet:text-[14px]">
              植物介紹植物介紹植物介紹植物介紹植物介紹植物介紹植物介紹植物介紹
            </Typography>
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default Showplant;
