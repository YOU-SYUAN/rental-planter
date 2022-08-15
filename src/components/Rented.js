import plantIMG from "../assets/card1.png";
import emailIcon from "../assets/img3.png";
import humidIMG from "../assets/humid.png";
import lightIMG from "../assets/light.png";
import deleteIMG from "../assets/delete.png";
import plant1 from "../assets/card1.png";
import { useState, useEffect } from "react";
import webSocket from "socket.io-client";
function Rented(props) {
  // websocket
  const [realtimeData, setRealtimeData] = useState({
    soil_humi: "--.--",
    light: "---",
  });
  const [ws, setWs] = useState(null);
  if (props.path != "http://localhost:3000/admin") {
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
  //soil_humi
  const initWebSocket = () => {
    ws.on("Plant/Data", (data) => {
      if (data.container_ID === props.rentedInfo.id) {
        setRealtimeData(data);
        // console.log(data);
      }
    });
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
        <div class="flex flex-wrap flex-col ml-6 mt-[44px] w-[220px]">
          <label>{props.rentedInfo.name}</label>
          <label class="flex flex-wrap">{props.rentedInfo.email}</label>
        </div>
        <img src={emailIcon} class="w-8 h-8 mt-[57px] ml-[9px]"></img>
        <img src={deleteIMG} class="h-6 w-6 mt-[15px] mr-[15px]"></img>
      </div>
      <div class="ml-10 mt-[26px] flex flex-row">
        <label class="text-[20px]">{props.rentedInfo.plantName}</label>
        <div class="flex flex-row ml-[34px]">
          <img src={humidIMG} class="h-[28px] w-[28px] mr-1"></img>
          <label class="text-[20px]">{realtimeData.soil_humi}%</label>
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
