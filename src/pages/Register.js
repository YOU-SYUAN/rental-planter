import background from "../assets/registerIMG.png";
import plantIMG from "../assets/bg.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
function Register() {
  const [errorMsg, setErrorMsg] = useState("");
  let navigate = useNavigate();
  function Confirm() {
    const email = document.getElementById("email").value;

    axios
      .post(`${process.env.REACT_APP_BACKEND_HOST || ""}/api/user/register`, {
        email: email,
      })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          alert("您已註冊成功!請檢查您的電子郵件!");
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response.status == 404) {
          console.log("狀態" + error.response.message);
          setErrorMsg("您還不是Monospace的會員!");
        } else if (error.response.status == 409) {
          alert("您已是Monospace的會員!請登入帳號");
          navigate("/");
          // setErrorMsg("您已是Monospace的會員!請登入帳號");
        }
        console.log(error);
      });
  }

  return (
    <div
      class="relative bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${background})`, height: "100vh" }}
    >
      <div class="w-[1200px] h-[540px] rounded-3xl bg-white flex flex-row">
        <div class="">
          <img src={plantIMG} class="rounded-l-3xl"></img>
        </div>
        <div class="flex justify-center w-[560px]">
          <div class="flex flex-wrap flex-col pt-[32px]">
            <h1 class="text-center text-[40px]  pt-12 tablet:pt-[20px] tablet:text-[20px] font-Nova_Flat font-normal">
              開始註冊
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
            <div class="flex flex-col justify-center mt-12">
              <div>
                <label class="text-[#FF0000] ">{errorMsg}</label>
              </div>
              <button
                onClick={Confirm}
                class="w-[386px] h-[42px] text-[20px] bg-[#519E75] text-white rounded-lg mr-12 "
              >
                註冊
              </button>
            </div>
            <div class=" mt-2">
              <label class="text-gray-500">已有帳號了?</label>
              <a href="./" class="text-[#1C64F2]">
                登入
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
