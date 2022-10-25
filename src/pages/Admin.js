import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import { RentedCard } from "../components/RentedCard";
import { WaitLine } from "../components/WaitLine";
import { Rented } from "../components/Rented";
import { useState, useEffect, useRef } from "react";
import {
  addAdmin,
  getUser,
  getRentedAmount,
  getWaitList,
  getRentedInfo,
} from "../Api.js";
import { NavBar } from "../components/NavBar";

const Admin = () => {
  const url = window.location.href;
  const [errorMsgAdmin, setErrorMsgAdmin] = useState("");
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
        }
        getData();
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("登入狀態已逾期，請重新登入");
          window.location.replace("/");
        }
      });
  }, []);

  const getData = () => {
    getRentedAmount()
      .then((response) => {
        if (response.status === 200) {
          setAmount(response.data);
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("登入狀態已逾期，請重新登入");
          window.location.replace("/");
        }
      });

    // 候補清單
    getWaitList()
      .then((response) => {
        if (response.status === 200) {
          setWaitlist(response.data);
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("登入狀態已逾期，請重新登入");
          window.location.replace("/");
        }
      });

    getRentedInfo()
      .then((response) => {
        if (response.status === 200) {
          setRentInfo(response.data);
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("登入狀態已逾期，請重新登入");
          window.location.replace("/");
        }
      });
  };

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
      plantName: x.plant?.name,
      plantIMG: x.plant?.imgPath,
      container: x.container,
    };
  });
  const addmodal = document.getElementById("authentication-modal");
  const name = useRef(undefined);
  const email = useRef(undefined);

  const add = async () => {
    addAdmin({ name: name.current.value, email: email.current.value })
      .then((response) => {
        if (response.status === 200) {
          alert("新增成功");
          setErrorMsgAdmin("");
          addmodal.style.display = "none";
          name.clear();
          email.clear();
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setErrorMsgAdmin("表單格式錯誤");
        } else if (error.response.status === 401) {
          alert("登入狀態已逾期，請重新登入");
          window.location.replace("/");
        } else if (error.response.status === 409) {
          setErrorMsgAdmin("使用者已存在");
        } else if (error.response.status === 500) {
          setErrorMsgAdmin("伺服器錯誤");
        }
      });
  };

  const show = () => {
    console.log("show");

    addmodal.style.display =
      addmodal.style.display === "none" ? "block" : "none";
  };

  const navBarItems = [
    {
      title: "盆栽管理",
      onClick: () => { },
      isCurrent: true,
    },
    {
      title: "新增管理員",
      onClick: () => show(),
    },
  ];

  return (
      //navbar
      <div id="Bg" className="flex flex-col items-center desktop:h-screen">
          <NavBar onLogoClick={() => {}} navItems={navBarItems} />
          <div className="desktop:h-24 tablet:h-20 h-16 flex-none" />
          {/* 新增管理員成功通知 */}
          {/* 第二層 */}
          {/* 新增管理員modal */}
          <div
              id="authentication-modal"
              style={{
                  display: "none",
              }}
              className="bg-black bg-opacity-80 hidden  fixed top-0 left-0 right-0 z-10 m-auto w-full md:inset-0 h-modal md:h-full"
          >
              <div className="flex flex-col justify-center p-4 m-auto w-full max-w-md h-full md:h-auto">
                  <div className="relative bg-white bg-opacity-100 rounded-lg shadow dark:bg-gray-700 z-50">
                      <div className="py-6 px-6 lg:px-8">
                          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                              新增管理員
                          </h3>
                          <div className="space-y-6" action="#">
                              <div>
                                  <label
                                      for="name"
                                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                      姓名
                                  </label>
                                  <input
                                      type="name"
                                      name="name"
                                      id="name"
                                      ref={name}
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                      placeholder="管理員名字"
                                      required
                                  />
                              </div>
                              <div>
                                  <label
                                      for="email"
                                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                      電子郵件
                                  </label>
                                  <input
                                      type="email"
                                      name="email"
                                      id="email"
                                      ref={email}
                                      placeholder="管理員電子郵件"
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                      required
                                  />
                              </div>
                              <label className="text-[#FF0000] ">
                                  {errorMsgAdmin}
                              </label>
                              <button
                                  onClick={add}
                                  type="button"
                                  className="w-full text-white bg-[#519E75] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                  新增
                              </button>
                              <button
                                  onClick={show}
                                  className="w-full text-white bg-[#929292] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                  取消
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div
              id="content"
              className="w-full desktop:max-w-[1560px] tablet:max-w-[768px] max-w-[375px] grid grid-cols-12 gap-4 desktop:flex-auto"
          >
              {/* 左半邊 */}
              <div className="desktop:col-span-5 col-span-12 flex flex-col">
                  <div className="flex flex-col items-center justify-center gap-4 p-8 flex-none">
                      <h1 className="text-[28px] text-center">租借數量</h1>
                      <div className="flex desktop:flex-row tablet:flex-row flex-col w-full items-center justify-center gap-12">
                          {data.map((item) => (
                              <RentedCard
                                  key={item.state}
                                  data={item}
                              ></RentedCard>
                          ))}
                      </div>
                  </div>
                  <div className="flex flex-col gap-4 p-8 flex-auto">
                      <h1 className="text-[28px] text-center flex-none">
                          候補名單
                      </h1>
                      <div className="bg-[#F9F9F9] border border-[#F9F9F9] rounded-3xl shadow-md overflow-y-scroll overflow-x-hidden p-4 flex flex-col gap-1 desktop:h-0 min-h-[45vh] desktop:flex-auto">
                          {info.map((item) => (
                              <WaitLine key={item.index} data={item}></WaitLine>
                          ))}
                      </div>
                  </div>
              </div>
              {/* 右半邊 */}
              <div className="flex flex-col desktop:col-span-7 col-span-12 h-full gap-4 p-8">
                  <h1 className="text-[28px] text-center flex-none">
                      已租資訊
                  </h1>
                  <div className=" overflow-y-scroll overflow-x-hidden bg-[#F9F9F9] border-[#F9F9F9] rounded-3xl shadow-md grid desktop:grid-cols-2 grid-cols-1 auto-rows-min desktop:flex-auto desktop:h-0 desktop:gap-10 desktop:p-10 gap-4 p-4">
                      {rentedInfo.map((item) => (
                          <Rented
                              key={item.id}
                              rentedInfo={item}
                              path={url}
                          ></Rented>
                      ))}
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Admin;
