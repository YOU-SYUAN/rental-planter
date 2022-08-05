import Background from "../assets/skyBgIMG.png";
import plantIMG from "../assets/bg2.png";
function Register() {
  return (
    <div
      class="relative bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${Background})`, height: "100vh" }}
    >
      <div class="rounded-3xl bg-white flex flex-row tablet:flex-col h-3/5 w-4/5">
        {/* <div class=""> */}
        <img src={plantIMG} class="rounded-l-3xl object-none w-2/5"></img>
        {/* </div> */}
        {/* <div class="flex justify-center"> */}
        <div class="flex flex-wrap flex-col py-12 w-3/5 space-y-12">
          {/* <div class="w-full justify-center"> */}
          <div>
            <h1 class="text-center text-[40px] tablet:pt-[20px] tablet:text-[20px] font-Nova_Flat font-normal">
              忘記密碼
            </h1>
            <h2 class="text-[20px] text-center text-[#929292] tracking-widest font-normal">
              Rental Planter
            </h2>
          </div>
          <div class="w-full flex flex-col items-center">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-black w-1/2"
            >
              電子郵件
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-1/2 h-[42px]"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <div class="flex flex-col w-full space-y-2 items-center">
            <button class="w-1/2 h-[42px] text-[14px] bg-[#519E75] text-white rounded-lg">
              確認
            </button>
            <button class="w-1/2 h-[42px] text-[14px] bg-[#929292] text-white rounded-lg">
              取消
            </button>
          </div>
          {/* </div> */}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Register;
