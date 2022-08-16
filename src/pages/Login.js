import "./App.css";
import Background from "../assets/homeIMG.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin, getUser } from "../Api.js";
function LoginForm() {
  let navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    //get user info
    getUser()
      .then((response) => {
        if (response.data.user.role == 0) {
          navigate("./main");
        } else {
          navigate("./admin");
        }
      })
      .catch(() => {});
  }, []);

  function Login() {
    //let errorMsg = document.getElementById("errorMsg").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    userLogin({ email, password })
      .then((response) => {
        if (response.status == 200) {
          setLocalToken(response.data.token);
          // console.log(response.data.user.role);
          if (response.data.user.role == 0) {
            navigate("./main");
          } else {
            navigate("./admin");
          }
        }
      })
      .catch((error) => {
        if (error.response.status == 401) {
          console.log("狀態" + error.response.status);
          setErrorMsg("帳號/密碼 錯誤，請再試一次");
        } else if (error.response.status == 500) {
          setErrorMsg("伺服器錯誤");
        }
        // console.log(error);
      });
  }

  //local storage 存token
  const setLocalToken = (token) => {
    localStorage.setItem("token", token);
    // console.log(token);
  };
  return (
    <div className="App">
      {/* style={{ backgroundImage: `url(${Background})` }} */}
      <div
        class="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})`, height: "100vh" }}
      >
        <div class="top-[100px] w-full fixed h-[93px]"></div>

        <div
          id="authentication-modal"
          tabindex="-1"
          class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full tablet:inset-0 h-full tablet:h-full justify-center flex content-start "
          aria-modal="true"
          role="dialog"
        >
          <div class="relative p-4 w-fit h-full tablet:h-auto flex flex-col items-center justify-center">
            <div class="w-full  phone:mt-[99.5px]">
              <p class="text-center text-[80px] text-white font-['Nova_Flat'] tablet:text-[80px] phone:text-[44px] ">
                Rental Planter
              </p>
              <p class="text-center text-[28px] mt-6 text-white tracking-[.40em] tablet:text-[28px] phone:text-[16px] phone:mt-6">
                用心照顧你的植物
              </p>
            </div>

            <div class="relative w-[480px] h-[520px] bg-white max-w-lg rounded-lg mt-[64px] shadow dark:bg-gray-700 py-12 phone:w-[343px] phone:h-[387px]">
              <p class="text-[32px] text-center font-semibold phone:text-[24px]">
                Monospace VIP
              </p>
              <div class="relative mt-[48px]">
                <div class=" px-8 desktop:px-8">
                  <form class="" action="#">
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-[20px] font-medium text-gray-900 dark:text-gray-300 phone:text-[14px]"
                      >
                        電子郵件
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
                    <div class="mt-6">
                      <label
                        for="password"
                        class="block mb-2 text-[20px] font-medium text-gray-900 dark:text-gray-300 phone:text-[14px]"
                      >
                        密碼
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
                    <div class="grid grid-col-2 grid-flow-col space-between">
                      <div class="">
                        <label class="text-[#FF0000] ">{errorMsg}</label>
                      </div>
                      <div class=" mt-6 grid justify-items-end">
                        <a href="./resetPwd" class=" text-[#1C64F2] ">
                          忘記密碼?
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={Login}
                      type="button"
                      class="w-full mt-6 text-white bg-[#519E75] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[20px] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 phone:mt-6"
                    >
                      登入
                    </button>
                  </form>
                  <div class="flex flex-rox mt-4">
                    <label class="text-gray-500">尚未註冊?</label>
                    <a href="./register" class="text-[#1C64F2]">
                      註冊
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
