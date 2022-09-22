import "./App.css";
import background from "../assets/work.png";
import Intro from "./Intro";
import State from "./State";
import logo from "../assets/logo.png";
import { Grid, Button } from "@mui/material";
import Showplant from "./Showplant";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import lamu from "../assets/img1.png";
import checkIcon from "../assets/check.png";
import React, { useState, useEffect } from "react";
import { getUser, getOtherPlant, registerRent } from "../Api.js";
function App() {
  const [informMsg, setInformMsg] = useState("");
  const url = window.location.href;
  const [user, setUser] = useState({
    user: {
      id: "",
      name: "",
      email: "",
    },
    rents: [],
  });
  const [otherPlant, setOtherPlant] = useState({
    data: [
      {
        plant: { name: "", intro: "", imgPath: "", nickName: "", minHumid: 0 },
        container: null,
      },
    ],
  });

  useEffect(() => {
    //get user info
    getUser()
      .then((response) => {
        if (response.data.user.role !== 0) {
          window.location.replace("/");
          return;
        }
        setUser(response.data);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          console.log("狀態" + error.response.status);
          window.location.replace("/");
        }
        console.log(error);
      });
    getOtherPlant()
      .then((response) => {
        if (response.status == 200) {
          console.log(response.data);
          setOtherPlant(response.data);
        }
      })
      .catch((error) => {
        if (error.response.status == 401) {
          console.log(error.response.status);
        }
      });
  }, []);

  // 顯示sidebar
  const show = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = sidebar.style.display == "none" ? "block" : "none";
  };
  const popupModal = document.getElementById("popupModal");
  const success = document.getElementById("successModal");
  const showModal = () => {
    console.log("popupModal");
    if (popupModal.classList.contains("hidden")) {
      popupModal.classList.remove("hidden");
    } else {
      popupModal.classList.add("hidden");
    }
  };
  const successModal = () => {
    console.log("確認候補");
    registerRent().then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        if (response.data.waiting == false) {
          setInformMsg("恭喜您登記成功!請至信箱查看信件!");
        } else {
          setInformMsg("目前已無空盆器，已將您排至候補!");
        }
        popupModal.classList.add("hidden");
        console.log("success");
        if (success.classList.contains("hidden")) {
          success.classList.remove("hidden");
        } else {
          success.classList.add("hidden");
        }
      }
    }).catch(error => {
       if (error.response.status === 401) {
          console.log("狀態" + error.status);
          alert("登入狀態已逾期，請重新登入");
          window.location.replace("/");
        }
    });
  };

  const closeModal = () => {
    success.classList.add("hidden");
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
  const logout = () => {
    localStorage.clear();
    console.log("logout");
    window.location.replace("/");
  };
  localStorage.getItem("key");
  const imgPaths = [card1, card2, card3, card4];
  return (
    <div>
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
                  <span onClick={logout} class="flex-1 ml-3 whitespace-nowrap">
                    登出
                  </span>
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
            class="bg-[#8B8B8B] text-white w-[56px] h-10 rounded-lg phone:hidden"
          >
            登出
          </button>
        </div>
      </nav>
      {/* </div> */}
      {/* 登記表單 */}

      <div
        id="popupModal"
        tabindex="-1"
        class="bg-black bg-opacity-50 hidden overflow-y-auto overflow-x-hidden fixed top-0 m-auto right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
      >
        <div class="relative flex flex-col justify-center p-4 w-full max-w-md m-auto h-full md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="p-6 text-center">
              <img src={lamu} class=" mx-auto mb-4 w-14 h-14 "></img>
              <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                是否要登記盆栽?
              </h3>
              <button
                onClick={successModal}
                data-modal-toggle="popup-modal"
                type="button"
                class="text-white bg-[#519E75] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                確定
              </button>
              <button
                onClick={showModal}
                data-modal-toggle="popup-modal"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 登記成功modal */}
      <div
        onClick={closeModal}
        id="successModal"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-20 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
      >
        <div class="relative flex p-4 w-full max-w-md ml-auto h-full md:h-auto">
          <div class="flex flex-row justify-center items-center bg-green-200 rounded-[6px] w-[491px] h-16">
            <img src={checkIcon} class="w-6 h-6 mr-[10px]"></img>
            <h3 class="text-[24px] font-semibold text-green-800 dark:text-white">
              {informMsg}
            </h3>
          </div>
        </div>
      </div>
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
            <Button
              onClick={showModal}
              class="bg-[#519E75] rounded-lg mt-4 w-[136px] h-[60px] tablet:w-[96px] tablet:h-[48px] text-white phone:w-[72px] phone:h-9 phone:text-[12px]"
            >
              立即登記
            </Button>
          </Grid>
        </Grid>
      </div>
      <div id="introduce">
        <Intro></Intro>
      </div>
      <div id="state">
        <State rents={user.rents} containerId={1} path={url}></State>
      </div>
      <h1
        id="showPlant"
        class=" text-center pt-20 font-extrabold text-[44px] tablet:text-[20px] phone:text-[18px] tablet:pt-0 phone:pt-10"
      >
        會員植物
      </h1>
      <div class="flex justify-center">
        <div class="flex flex-row overflow-x-scroll overflow-y-hidden items-center w-full max-w-[1560px] h-[803px] mb-20 tablet:mb-10 text-center phone:mb-10">
          {/* {otherPlant.map((item) => (
          <Showplant key={item.container} data={item}></Showplant>
        ))} */}
          {otherPlant.data.map((item) => {
            if (item.plant != null) {
              return <Showplant key={item.container} data={item}></Showplant>;
            }
          })}
        </div>
      </div>
      <div class="flex justify-center bg-[#F9FAFB]">
        <div class="mt-[60px] flex flex-col tablet:mt-10">
          <h1 class="font-extrabold text-[36px] tablet:text-[24px] phone:text-[20px]">
            現在就租借你的盆器
          </h1>
          <div class="text-[#6B7280] mt-6 text-center text-[20px] tablet-[16px] phone:text-[14px]">
            用心愛護你的植物
          </div>
          <div class="text-center">
            <button
              onClick={showModal}
              class="bg-[#519E75] w-[136px] h-[60px] text-[24px] text-white rounded-lg mt-6 mb-24 tablet:mb-[45px] tablet:mt-[45px] tablet:w-[104px] tablet:h-[48px] tablet:text-[16px] phone:w-[88px] phone:h-[42px] phone:text-[18px]"
            >
              立即登記
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
