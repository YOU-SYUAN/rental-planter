import plantIMG from "../assets/card1.png";
import emailIcon from "../assets/img3.png";
import humidIMG from "../assets/humid.png";
import lightIMG from "../assets/light.png";
import deleteIMG from "../assets/delete.png";
import plant1 from "../assets/card1.png";
import { Dropdown } from "flowbite-react";
import { useState, useEffect } from "react";
import webSocket from "socket.io-client";
import axios from "axios";
import { deleteRented } from "../Api";
function Rented(props) {
  const deleteInfo = (rentId) => {
    console.log("即將刪除");
    //get user info
    deleteRented(rentId).then((res) => {
      console.log(res);
      console.log(res.data);

      const posts = this.state.posts.filter((item) => item.rentId !== rentId);
      this.setState({ posts });
    });
  };
  const showDelete = () => {
    const dropdownDots = document.getElementById("dropdownDots");
    if (dropdownDots.classList.contains("hidden")) {
      dropdownDots.classList.remove("hidden");
    } else {
      dropdownDots.classList.add("hidden");
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
          class="mt-10"
          onClick={() => (window.location = `mailto:${props.rentedInfo.email}`)}
        >
          <img src={emailIcon} class="w-8 h-8  "></img>
        </button>

        {/* 下拉選項 */}
        <button
          onClick={showDelete}
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          class="inline-flex items-center  text-sm h-6 mt-[15px] ml-4 font-medium text-center text-gray-900 bg-transparent rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
          </svg>
        </button>

        <div
          id="dropdownDots"
          // style={{ display: "none" }}
          class="hidden z-10 w-44 h-12 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconButton"
          >
            <li>
              <button
                onClick={() => {
                  deleteInfo(props.rentedInfo.id);
                }}
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              ></button>
              刪除盆栽
            </li>
          </ul>
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
