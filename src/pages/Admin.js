import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import RentedCard from "../components/RentedCard";
import Waitline from "../components/Waitline";
import Rented from "../components/Rented";
import logo from "../assets/logo.png";
import AddAdmin from "../components/AddAdmin";
import { useState, useEffect } from "react";
import {
  addAdmin,
  getUser,
  getRentedAmount,
  getWaitList,
  getRentedInfo,
} from "../Api.js";

function Admin() {
  const url = window.location.href;
  const [amount, setAmount] = useState({ data: { remain: 0, rented: 0 } });
  const [waitlist, setWaitlist] = useState({ data: [] });
  const [rentInfo, setRentInfo] = useState({
    data: [
      { id: 0, owner: { name: "", email: "" }, plant: null, container: null },
    ],
  });
  // 接收api資料
  useEffect(() => {
    //get user info
    getUser()
      .then((response) => {
        if (response.data.user.role !== 1) {
          window.location.replace("/");
          return;
        }
      })
      .catch((error) => {
        if (error.response.status == 401) {
          console.log("狀態" + error.response.status);
          window.location.replace("/");
        }
        console.log(error);
      });

    getRentedAmount()
      .then((response) => {
        if (response.status == 200) {
          setAmount(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        if (error.response.status == 401) {
          console.log("狀態" + error.response.status);
        }
        console.log(error);
      });

    // 候補清單
    getWaitList()
      .then((response) => {
        if (response.status == 200) {
          setWaitlist(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        if (error.response.status == 401) {
          console.log("狀態" + error.response.status);
        } else if (error.response.status == 400) {
          console.log("invalid header");
        }
        console.log(error);
      });
    getRentedInfo()
      .then((response) => {
        if (response.status == 200) {
          setRentInfo(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        if (error.response.status == 401) {
          console.log("狀態" + error.response.status);
        }
        console.log(error);
      });
  }, []);

  // 已租借清單
  const data = [
    {
      img: img2,
      amount: amount.data.remain,
      bgColor: "#FFC700",
      state: "未租",
    },
    {
      img: img1,
      amount: amount.data.rented,
      bgColor: "#519E75",
      state: "已租",
    },
  ];
  const info = waitlist.data;

  const rentedInfo = rentInfo.data.map((x) => {
    return {
      id: x.id,
      name: x.owner.name,
      email: x.owner.email,
      plantName: x.plant !== null ? x.plant.name : "尚未填寫",
      plantIMG: x.plant !== null ? x.plant.imgPath : undefined,
      container: x.container,
    };
  });
  const addmodal = document.getElementById("authentication-modal");
  async function add() {
    console.log("addadmin");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    addAdmin({ name, email })
      .then((response) => {
        if (response.status == 200) {
          console.log("新增成功");
          addmodal.style.display = "none";
        }
      })
      .catch((error) => {
        if (error.response.status == 401) {
          console.log("狀態" + error.status);
        } else if (error.status == 500) {
        }
        console.log(error);
      });
  }
  const show = () => {
    console.log("show");

    addmodal.style.display =
      addmodal.style.display == "none" ? "block" : "none";
  };

  const logout = () => {
    localStorage.clear();
    console.log("logout");
    window.location.replace("/");
  };
  return (
    //navbar
    <div style={{ height: "100vh" }} id="Bg">
      <div class="">
        <nav class=" h-24 tablet:h-[69.71px] phone:h-[70px] py-6 shadow-lg">
          <div class=" mx-[140px] flex flex-row flex-wrap justify-between items-center tablet:mx-9 phone:mx-4 ">
            <img
              src={logo}
              class="mr-3 h-6 tablet:w-[74px] tablet:h-[45.71px] phone:w-12 phone:h-[34.29px]"
              alt="Logo"
            />
            <button
              id="hambar"
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
                  <button class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
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
                    <span class="ml-3">盆栽管理</span>
                  </button>
                </li>
                <li>
                  <a class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
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
                    <span class="flex-1 ml-3 whitespace-nowrap">
                      新增管理員
                    </span>
                  </a>
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
                    <span
                      onClick={logout}
                      class="flex-1 ml-3 whitespace-nowrap"
                    >
                      登出
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            <div class="flex items-center text-[20px] tablet:text-[16px] phone:hidden">
              <button class="mr-8  ">盆栽管理</button>
              <button
                class="mr-8"
                data-modal-toggle="authentication-modal"
                onClick={show}
              >
                新增管理員
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
      </div>
      {/* 新增管理員成功通知 */}
      <div></div>
      {/* 第二層 */}
      {/* 新增管理員modal */}
      <div
        id="authentication-modal"
        style={{
          display: "none",
        }}
        class="bg-black bg-opacity-80 hidden  fixed top-0 left-0 right-0 z-10 m-auto w-full md:inset-0 h-modal md:h-full"
      >
        <div class="flex flex-col justify-center p-4 m-auto w-full max-w-md h-full md:h-auto">
          <div class="relative bg-white bg-opacity-100 rounded-lg shadow dark:bg-gray-700 z-50">
            <div class="py-6 px-6 lg:px-8">
              <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                新增管理員
              </h3>
              <div class="space-y-6" action="#">
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    姓名
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name"
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    電子郵件
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@company.com"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>

                <button
                  onClick={add}
                  type="button"
                  class="w-full text-white bg-[#519E75] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  新增
                </button>
                <button
                  onClick={show}
                  class="w-full text-white bg-[#929292] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-[90px] ">
        <div class="grid grid-col-12 grid-flow-col flex-wrap">
          {/* 左半邊 */}
          <div class="grid col-end-5 mr-[120px]">
            <div>
              <h1 class="text-[28px] text-center ml-24">租借數量</h1>
              <div class="flex flex-row ml-[137px] mt-6">
                {data.map((item) => (
                  <RentedCard key={item.state} data={item}></RentedCard>
                ))}
              </div>
            </div>
            <div class="mt-[86px]">
              <h1 class="text-[28px] text-center  ml-24">候補名單</h1>
              <div class=" w-[552px] h-[520px] overflow-y-scroll overflow-x-hidden ml-[124px] mt-6 bg-[#F9F9F9] border border-[#F9F9F9] rounded-3xl shadow-md ">
                {info.map((item) => (
                  <Waitline key={item.index} data={item}></Waitline>
                ))}
              </div>
              {/* <Waitline></Waitline> */}
            </div>
          </div>
          {/* 右半邊 */}
          <div class="grid col-start-6 col-span-7 flex-wrap mb-[53px]">
            <h1 class="text-[28px] text-center">已租資訊</h1>
            <div class="mt-6">
              <div class="w-[1000px] h-[841px] flex flex-wrap overflow-y-scroll overflow-x-hidden bg-[#F9F9F9] border-[#F9F9F9] rounded-3xl shadow-md ">
                {rentedInfo.map((item) => (
                  <Rented key={item.id} rentedInfo={item} path={url}></Rented>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
