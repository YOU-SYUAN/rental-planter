function Showplant(props) {
  const plantIMG = `${process.env.REACT_APP_BACKEND_HOST || ""}/${
    props.data.plant.imgPath
  }`;
  return (
    <div class="flex flex-wrap justify-center mx-auto mx-5 ">
      {/* <div class="flex flex-wrap flex-row justify-center mt-[60px] mb-20 text-center "> */}
      <div class="rounded-2xl border border-[#E5E7EB] w-[304px] h-[531px] flex justify-center tablet:h-[513px]">
        <div class=" w-60 pt-8">
          <img src={plantIMG} class="h-[240px] w-[240px]"></img>
          <div class="font-semibold mt-6 text-[24px] tablet:text-[16px]">
            {props.data.plant.name}
          </div>
          <div class="text-[#6B7280] mt-4 text-[18px] tablet:text-[14px]">
            {props.data.plant.nickName}
          </div>
          <div class="mt-6 text-left text-[16px] tablet:text-[14px]">
            {props.data.plant.intro}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Showplant;
