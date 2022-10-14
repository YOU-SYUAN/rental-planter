import plant from "../assets/plant.png";

const Intro = () => {
  return (
    <div class="grid grid-cols-2 w-full desktop:max-w-[1560px] tablet:max-w-[768px] max-w-[375px] desktop:p-20 p-4 desktop:gap-20 gap-10">
      <div class="desktop:col-span-1 tablet:col-span-1 col-span-2 flex justify-center items-center">
        <img
          src={plant}
          class="desktop:h-[500.45px] desktop:w-[640px] tablet:w-[280px] tablet:h-[218.95px] w-[240px] h-[187.67px]"
          alt="plant"
        ></img>
      </div>
      <div class="desktop:col-span-1 tablet:col-span-1 col-span-2 flex flex-col justify-center desktop:items-start tablet:items-start items-center desktop:px-5 tablet:px-5 px-10">
        <div class="Nova Flat w-full desktop:text-[28px] tablet:text-[12px] text-[12px] desktop:text-left tablet:text-left text-center">
          Monospace
        </div>
        <div class="font-extrabold w-full desktop:text-[44px] tablet:text-[20px] text-[18px] desktop:text-left tablet:text-left text-center">
          盆器租借系統
        </div>
        <div class="mt-6 w-full text-[#9D9D9D] desktop:text-[20px] tablet:text-[14px] text-[14px]">
          打造自動化系統，隨時檢測植物生長環境，讓你的植物安心生長。
        </div>
        <ul class="list-disc mt-6 pl-6  desktop:leading-10 text-gray-500  desktop:text-[20px] tablet:text-[14px] tablet:leading-7 text-[14px] leading-5">
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
