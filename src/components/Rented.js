import emailIcon from "../assets/img3.png";
import humidIMG from "../assets/humid.png";
import lightIMG from "../assets/light.png";
import deleteIMG from "../assets/deleteIcon.png";
import plant1 from "../assets/card1.png";
import { useState, useEffect } from "react";
import webSocket from "socket.io-client";
import { deleteRented } from "../Api";
import { PopUpModal } from "./modal/PopUpModal";

const Rented = (props) => {
  const [showPopUpModal, setShowPopUpModal] = useState(false);

  const deleteInfo = (rentId) => {
    //delete user info
    deleteRented(rentId)
      .then((res) => {
        if (res.status === 200) {
          alert("刪除成功！");
          //重新整理頁面
          window.location.reload();
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("登入狀態已逾期，請重新登入");
          window.location.replace("/");
        }
      });
  };

  // websocket
  const [realtimeData, setRealtimeData] = useState({
    soilHumid: "--.--",
    light: "---",
  });
  const [ws, setWs] = useState(null);

  const registerDisconnectHandler = () => {
    ws.on("disconnect", () => {
      console.log("Disconnected");
      ws.close();
    });
  };

  if (props.path !== `${window.location.origin}/admin`) {
    registerDisconnectHandler();
  }

  useEffect(() => {
    if (ws) {
      initWebSocket();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ws]);

  //soilHumid
  const initWebSocket = () => {
    ws.on("Plant/Data", (data) => {
      if (data.container === props.rentedInfo.container) {
        setRealtimeData(data);
      }
    });

    ws.emit("lastData", props.rentedInfo.container);
  };
  useEffect(() => {
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
          alt="plant"
        ></img>
        <div class="flex flex-wrap flex-col ml-6 mt-[52px] w-[220px]">
          <label class="text-[24px]">{props.rentedInfo.name}</label>
        </div>
        <button
          class="inline-flex items-center  text-sm h-6 mt-[15px] ml-4 font-medium text-center text-gray-900 bg-transparent rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => (window.location = `mailto:${props.rentedInfo.email}`)}
        >
          <img src={emailIcon} class="w-6 h-6  " alt="email"></img>
        </button>

        {/* 刪除按鈕 */}
        <button
          onClick={() => setShowPopUpModal(true)}
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          class="inline-flex items-center  text-sm h-6 mt-[15px] mx-4 font-medium text-center text-gray-900 bg-transparent rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <img src={deleteIMG} class="h-6 w-6" alt="delete"></img>
        </button>

        <PopUpModal
          text={`是否刪除 ${props.rentedInfo.name} 的租借資料「${props.rentedInfo.plantName}」？`}
          color="red"
          show={showPopUpModal}
          img={deleteIMG}
          onConfirm={() => deleteInfo(props.rentedInfo.id)}
          onCancel={() => setShowPopUpModal(false)}
        />
      </div>
      <div class="ml-10 mt-[26px] flex flex-row">
        <label class="text-[20px]">{props.rentedInfo.plantName}</label>
        <div class="flex flex-row ml-[34px]">
          <img src={humidIMG} class="h-[28px] w-[28px] mr-1" alt="humid"></img>
          <label class="text-[20px]">{realtimeData.soilHumid}%</label>
        </div>
        <div class="flex flex-row ml-[19px]">
          <img src={lightIMG} class="h-[28px] w-[28px] mr-1" alt="light"></img>
          <label class="text-[20px]">{realtimeData.light} lx</label>
        </div>
      </div>
    </div>
  );
};

export default Rented;
