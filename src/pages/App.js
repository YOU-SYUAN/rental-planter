import "./App.css";
import background from "../assets/work.png";
import Intro from "./Intro";
import State from "./State";
import Navbar from "./Navbar";
import logo from "../assets/logo.png";
import { Grid, Button } from "@mui/material";
import Showplant from "./Showplant";
import RentalSticker from "./Rentalsticker";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import React, { useState, useEffect } from "react";
import webSocket from "socket.io-client";
import {
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useNavigate,
} from "react-router-dom";

function App() {
  // 顯示sidebar
  const show = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = sidebar.style.display == "none" ? "block" : "none";
  };

  //錨點設定
  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  };
  let navigate = useNavigate();
  const logout = () => {
    console.log("logout");
    navigate("/");
  };

  const imgPaths = [card1, card2, card3, card4];
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      {/* <div class="h-16 fixed bg-white flex flex-row flex-wrap justify-between items-center tablet:mx-9 phone:mx-4"> */}
      <nav class=" tablet:h-[69.71px] phone:h-[70px]">
        <div class=" mx-[140px] my-6 flex flex-row flex-wrap justify-between items-center tablet:mx-9 phone:mx-4">
          <img
            src={logo}
            class="mr-3 h-6 tablet:w-[74px] tablet:h-[45.71px] phone:w-12 phone:h-[34.29px]"
            alt="Logo"
          />
          <button
            id="hambar"
            onClick={show}
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center text-sm text-gray-500 rounded-lg tablet:hidden desktop:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 phone:justify-end"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-name="立即租借"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="sidebar"
            class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 desktop:hidden tablet:hidden absolute right-0 top-12"
            style={{ display: "none" }}
          >
            <ul class="space-y-2">
              <li>
                <button
                  onClick={() => scrollToAnchor("introduce")}
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span class="ml-3">系統介紹</span>
                </button>
              </li>
              <li>
                <a
                  onClick={() => scrollToAnchor("state")}
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">盆栽狀態</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToAnchor("showPlant")}
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap ">會員植物</span>
                </button>
              </li>
              <li>
                <button
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">登出</span>
                </button>
              </li>
            </ul>
          </div>

          <div class="flex items-center text-[20px] tablet:text-[16px] phone:hidden">
            <button onClick={() => scrollToAnchor("introduce")} class="mr-8  ">
              系統介紹
            </button>
            <button onClick={() => scrollToAnchor("state")} class="mr-8">
              盆栽狀態
            </button>
            <button onClick={() => scrollToAnchor("showPlant")} class="">
              會員植物
            </button>
          </div>
          {/* rounded-lg -> 8px */}
          <button
            onClick={logout}
            class="bg-[#519E75] text-white w-20 h-9 rounded-lg phone:hidden"
          >
            登出
          </button>
        </div>
      </nav>
      {/* </div> */}
      {/* 區塊2 */}
      <div
        class="w-full 
        h-[720px]
        tablet:h-[432px]
        phone:h-[360px]
        "
        style={{ backgroundImage: `url(${background})` }}
      >
        <Grid container direction="row" spacing={2}>
          <Grid item xs={5}>
            <div></div>
          </Grid>
          <Grid
            item
            xs={7}
            style={{ textAlign: "left" }}
            class="mt-[229px] tablet:mt-[124.29px] phone:mt-[128px]"
          >
            <div class="text-[100px] text-white tablet:text-[54px] phone:text-[32px] ">
              Rental Planter
            </div>
            <div class="text-[20px] text-white tablet:text-[16px] phone:text-[12px]">
              用心愛護你的植物
            </div>
            <Button class="bg-[#519E75] rounded-lg mt-4 w-[136px] h-[60px] tablet:w-[96px] tablet:h-[48px] text-white phone:w-[88px] phone:h-[48px] phone:text-[12px]">
              立即預約
            </Button>
          </Grid>
        </Grid>
      </div>
      <div id="introduce">
        <Intro></Intro>
      </div>
      <div id="state">
        <State></State>
      </div>
      <h1
        id="showPlant"
        class=" text-center pt-20 font-extrabold text-[44px] tablet:text-[20px] phone:text-[18px] tablet:pt-0 phone:pt-10"
      >
        會員植物
      </h1>
      <div class="flex flex-wrap flex-row justify-center mt-[60px] mb-20 tablet:mb-10 text-center tablet:ml-10 tablet:mt-0 phone:mt-5 phone:mb-10 phone:ml-[35.5px]">
        {imgPaths.map((item) => (
          <Showplant key={item} path={item}></Showplant>
        ))}
      </div>
      <RentalSticker></RentalSticker>
      {/* <div class="flex justify-center">
        <RentForm></RentForm>
      </div> */}
    </div>
  );
}
export default App;
