import plantIMG from "../assets/card1.png";
import emailIcon from "../assets/img3.png";
import humidIMG from "../assets/humid.png";
import lightIMG from "../assets/light.png";
import deleteIMG from "../assets/deleteIcon.png";
import plant1 from "../assets/card1.png";
import { Dropdown } from "flowbite-react";
import { useState, useEffect } from "react";
import webSocket from "socket.io-client";
import { deleteRented, getRentedInfo } from "../Api";
function Rented(props) {
  const [id, changeId] = useState(props.rentedInfo.id);
  const deleteInfo = (rentId) => {
    console.log(rentId);
    //delete user info
    deleteRented(rentId).then((res) => {
      console.log(rentId);
      //重新整理頁面
      window.location.reload();

      console.log(res);
      console.log(res.data);
    });
  };
  const showDelete = (rentId) => {
    console.log(rentId);
    changeId(rentId);
    const popupModal = document.getElementById(`${props.rentedInfo.id}`);
    if (popupModal.classList.contains("hidden")) {
      popupModal.classList.remove("hidden");
    } else {
      popupModal.classList.add("hidden");
    }
  };
  // websocket
  const [realtimeData, setRealtimeData] = useState({
    soilHumid: "--.--",
    light: "---",
  });
  const [ws, setWs] = useState(null);
  if (props.path != `${window.location.origin}/admin`) {
    registerDisconnectHandler();
  }
  function registerDisconnectHandler() {
    ws.on("disconnect", () => {
      console.log("Disconnected");
      ws.close();
    });
  }
  useEffect(() => {
    if (ws) {
      initWebSocket();
    }
  }, [ws]);
  //soilHumid
  const initWebSocket = () => {
    ws.on("Plant/Data", (data) => {
      if (data.container === props.rentedInfo.container) {
        setRealtimeData(data);
        // console.log(data);
      }
    });

    ws.emit("lastData", props.rentedInfo.container);
  };
  useEffect(() => {
    // console.log(window.location.hostname);
    // console.log(window.location.href);
    setWs(
      webSocket(
        process.env.REACT_APP_BACKEND_HOST ||
          `http://${window.location.hostname}/`,
        {
          transports: ["websocket"],
        }
      )
    );
  }, []);

  const plantIMG = props.rentedInfo.plantIMG
    ? `${process.env.REACT_APP_BACKEND_HOST || ""}/${props.rentedInfo.plantIMG}`
    : plant1;
  return (
    <div class="w-[440px] h-[180px] border border-[#D7D7D7] rounded-3xl ml-10 mt-10">
      <div class="flex flex-row">
        <img
          src={plantIMG}
          class="w-20 h-20 rounded-full ml-[30px] mt-[27px]"
        ></img>
        <div class="flex flex-wrap flex-col ml-6 mt-[52px] w-[220px]">
          <label class="text-[24px]">{props.rentedInfo.name}</label>
        </div>
        <button
          class="inline-flex items-center  text-sm h-6 mt-[15px] ml-4 font-medium text-center text-gray-900 bg-transparent rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => (window.location = `mailto:${props.rentedInfo.email}`)}
        >
          <img src={emailIcon} class="w-6 h-6  "></img>
        </button>

        {/* 刪除按鈕 */}
        <button
          onClick={() => {
            showDelete(props.rentedInfo.id);
          }}
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          class="inline-flex items-center  text-sm h-6 mt-[15px] mx-4 font-medium text-center text-gray-900 bg-transparent rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <img src={deleteIMG} class="h-6 w-6"></img>
        </button>
        <div
          id={props.rentedInfo.id}
          tabindex="-1"
          class="bg-black bg-opacity-50 hidden overflow-y-auto overflow-x-hidden fixed top-0 m-auto right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
        >
          <div class="relative flex flex-col justify-center p-4 w-full max-w-md m-auto h-full md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="p-6 text-center">
                <img src={deleteIMG} class=" mx-auto mb-4 w-14 h-14 "></img>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  確定要刪除盆栽資訊嗎?
                </h3>
                <button
                  onClick={() => {
                    deleteInfo(id);
                  }}
                  data-modal-toggle="popup-modal"
                  type="button"
                  class="text-white bg-[#519E75] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  確定
                </button>
                <button
                  onClick={showDelete}
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
      </div>
      <div class="ml-10 mt-[26px] flex flex-row">
        <label class="text-[20px]">{props.rentedInfo.plantName}</label>
        <div class="flex flex-row ml-[34px]">
          <img src={humidIMG} class="h-[28px] w-[28px] mr-1"></img>
          <label class="text-[20px]">{realtimeData.soilHumid}%</label>
        </div>
        <div class="flex flex-row ml-[19px]">
          <img src={lightIMG} class="h-[28px] w-[28px] mr-1"></img>
          <label class="text-[20px]">{realtimeData.light} lx</label>
        </div>
      </div>
    </div>
  );
}
export default Rented;
