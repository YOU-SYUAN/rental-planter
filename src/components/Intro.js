import plant from "../assets/plant.png";

const Intro = () => {
  return (
    <div class=" flex flex-row justify-center phone:flex-wrap ">
      <div class="pr-[70px] mt-[60px] pt-[70px] tablet:px-10 tablet:py-[71px] tablet:mt-4 phone:pr-[10px] phone:mt-[46px] phone:mx-5 phone:pt-0">
        <img
          src={plant}
          class="h-[500.45px] w-[640px] pb-[70px] tablet:w-[280px] tablet:h-[218.95px] tablet:pb-5 phone:w-[240px] phone:h-[187.67px] phone:pb-[26.33px] phone:px-[47.5px]"
          alt="plant"
        ></img>
      </div>
      <div class="mt-[60px] ml-[60px] pl-8 pt-[104px] tablet:mt-5 tablet:pt-[31px] tablet:ml-5 phone:p-0 phone:mt-0 phone:ml-0 phone:justify-center">
        <div class="Nova Flat text-[28px] tablet:text-[12px] phone:text-[12px] phone:flex phone:justify-center">
          Monospace
        </div>
        <div class="font-extrabold text-[44px] tablet:text-[20px] tablet:mt-2 phone:text-[18px] phone:flex phone:justify-center phone:mt-2">
          盆器租借系統
        </div>
        <div class="mt-6 text-[20px] text-[#9D9D9D] tablet:text-[14px] tablet:mt-4 tablet:w-[276px] phone:text-[14px] phone:w-[203px] phone:h-[63px]  phone:mb-5">
          打造自動化系統，隨時檢測植物生長環境，讓你的植物安心生長。
        </div>
        <ul class="list-disc leading-10 text-gray-500  text-[20px] tablet:text-[14px] pt-6 pl-6 tablet:leading-7  phone:text-[14px] phone:leading-5 phone:pl-[60px] phone:mb-[51px]">
          <li>土壤溼度感測</li>
          <li>光照強度感測</li>
          <li>光照開關控制</li>
          <li>預約盆器租借</li>
          <li>租借盆器遞補通知</li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
