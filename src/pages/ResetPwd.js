import Background from "../assets/resetIMG.png";
import plantIMG from "../assets/bg2.png";
function Register() {
  return (
    <div
      class="relative bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${Background})`, height: "100vh" }}
    >
      <div class="w-[1200px] h-[540px] rounded-3xl bg-white flex flex-row">
        <div class="">
          <img src={plantIMG} class="rounded-l-3xl"></img>
        </div>
        <div class="flex justify-center w-[560px]">
          <div class="flex flex-wrap flex-col pt-[32px]">
            <h1 class="text-center text-[40px]  pt-12 tablet:pt-[20px] tablet:text-[20px] font-Nova_Flat font-normal">
              忘記密碼
            </h1>
            <h2 class="text-[20px] text-center text-[#929292] tracking-widest font-normal">
              Rental Planter
            </h2>
            <div class="mt-[60px]">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-black"
              >
                電子郵件
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[386px] h-[42px]"
                placeholder="name@flowbite.com"
                required
              />
            </div>

            <div class="flex flex-col justify-center mt-[60px]">
              <button class="w-[386px] h-[42px] text-[20px] bg-[#519E75] text-white rounded-lg mr-12 ">
                確認
              </button>
              <button class="w-[386px] h-[42px] text-[20px] bg-[#929292] text-white rounded-lg mr-12 mt-2">
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
