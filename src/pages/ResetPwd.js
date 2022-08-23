import Background from "../assets/skyBgIMG.png";
import plantIMG from "../assets/resetIMG.png";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
function ResetPwd() {
  let token = useRef(null);
  let navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  function resetform() {
    //let errorMsg = document.getElementById("errorMsg").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    axios
      .post(`${process.env.REACT_APP_BACKEND_HOST || ""}/api/user/password`, {
        password,
      })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          // token = <App token={response.data.token} />;
          // token = ;
          setLocalToken(response.data.token);
          // console.log("login: " + token);
          navigate("./");
        }
      })
      .catch((error) => {
        if (error.response.status == 400) {
          console.log("狀態" + error.response.status);
          setErrorMsg("Invalid header/body");
        } else if (error.response.status == 401) {
          setErrorMsg("Invalid JWT token");
        }
        console.log(error);
      });
  }
  const setLocalToken = (token) => {
    localStorage.setItem("token", token);
    console.log(token);
  };
  return (
    <div
      class="relative bg-cover flex justify-center items-center tablet:flex-col phone:flex-col"
      style={{ backgroundImage: `url(${Background})`, height: "100vh" }}
    >
      <div class="rounded-3xl bg-white flex flex-row h-3/5 w-4/5 tablet:flex-col tablet:w-3/5 phone:flex-col phone:w-4/5">
        {/* <div class=""> */}
        <img
          src={plantIMG}
          class="desktop:rounded-l-3xl object-cover w-2/5 tablet:w-full tablet:h-2/5 tablet:rounded-t-3xl phone:w-full phone:h-2/5 phone:rounded-t-3xl"
        ></img>
        {/* </div> */}
        {/* <div class="flex justify-center"> */}
        <div class="flex flex-wrap flex-row py-12 w-3/5 space-y-12 overflow-y-auto tablet:w-full phone:w-full">
          {/* <div class="w-full justify-center"> */}
          <div class="w-full">
            <h1 class="text-center text-[40px] font-Nova_Flat font-normal tablet:text-[32px] phone:text-[24px]">
              重設密碼
            </h1>
            <h2 class="text-[20px] text-center text-[#929292] tracking-widest font-normal tablet:text-[20px] phone:text-[14px]">
              Reset Password
            </h2>
          </div>
          <div class="w-full flex flex-col items-center tablet:px-10 phone:px-10">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-black w-1/2 tablet:w-full phone:w-full"
            >
              密碼
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="輸入密碼"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-1/2 h-[42px] tablet:w-full phone:w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
            <label
              for="password"
              class="block my-2 text-sm font-medium text-black w-1/2 tablet:w-full phone:w-full"
            >
              確認密碼
            </label>
            <input
              type="password"
              name="password2"
              id="password2"
              placeholder="再次輸入密碼"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-1/2 h-[42px] tablet:w-full phone:w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
          </div>

          <div class="flex flex-col w-full space-y-2 items-center tablet:px-10 phone:px-10">
            <button class="w-1/2 h-[42px] text-[14px] bg-[#519E75] text-white rounded-lg tablet:w-full phone:w-full">
              確認
            </button>
            <button class="w-1/2 h-[42px] text-[14px] bg-[#929292] text-white rounded-lg tablet:w-full phone:w-full">
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

export default ResetPwd;
