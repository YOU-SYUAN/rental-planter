import "./App.css";
import Background from "../assets/homeIMG.png";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { borderRadius, margin } from "@mui/system";
function App() {
  return (
    <div className="App">
      {/* style={{ backgroundImage: `url(${Background})` }} */}
      <div
        class="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})`, height: "100vh" }}
      >
        {/* <img
          src={require("../assets/homeIMG.png")}
          class="object-cover h-[1280px] absolute overflow-hidden"
        /> */}
        <div class="top-[100px] w-full fixed h-[93px]"></div>
        {/* <p class="mt-[99.5px] w-full text-center fixed text-[44px] text-white font-['Nova_Flat'] md:text-[80px] md:mt-[188px] lg:text-[120px] lg:mt-[100px]">
          Rental Planter
        </p>
        <p class="mt-[176.5px] text-center fixed text-[16px] w-full text-white tracking-[.40em] md:text-[20px] md:mt-[309px] lg:text-[36px] lg:mt-[243px]">
          用心照顧你的植物
        </p> */}

        <div
          id="authentication-modal"
          tabindex="-1"
          class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full md:h-full justify-center flex content-start"
          aria-modal="true"
          role="dialog"
        >
          <div class="relative p-4 w-fit h-full md:h-auto">
            <div class="w-full">
              <p class="text-center text-[44px] text-white font-['Nova_Flat'] md:text-[80px] lg:text-[120px] ">
                Rental Planter
              </p>
              <p class="text-center text-[16px mt-[24px] text-white tracking-[.40em] md:text-[20px] lg:text-[36px]">
                用心照顧你的植物
              </p>
            </div>

            <div class="relative bg-white m-auto max-w-lg rounded-lg mt-[64px] shadow dark:bg-gray-700 py-12">
              <p class="text-[24px] text-center font-semibold">Monospace VIP</p>
              <div class="relative mt-[48px]">
                {/* <button
                type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="authentication-modal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button> */}
                <div class="py-6 px-6 lg:px-8">
                  <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    登入會員植物管理系統
                  </h3>
                  <form class="space-y-6" action="#">
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required=""
                      />
                    </div>
                    {/* <div class="flex justify-between">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <label
                        for="remember"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Lost Password?
                    </a>
                  </div> */}
                    <button
                      type="submit"
                      class="w-full text-white bg-[#519E75] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Login to your account
                    </button>
                    {/* <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?{" "}
                    <a
                      href="#"
                      class="text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Create account
                    </a>
                  </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
