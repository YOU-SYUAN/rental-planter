import { Typography } from "@mui/material";
import lightImg from "../assets/light.png";
import humid from "../assets/humid.png";
import { useState, useEffect } from "react";
import webSocket from "socket.io-client";
import { useNavigate } from "react-router-dom";

const StatePlant = (props) => {
  let navigate = useNavigate();
  // websocket
  const [realtimeData, setRealtimeData] = useState({
    soilHumid: "--.--",
    light: "---",
  });
  const [ws, setWs] = useState(null);

  useEffect(() => {
    if (ws) {
      initWebSocket();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ws]);

  //soilHumid
  const initWebSocket = () => {
    ws.on("Plant/Data", (data) => {
      if (data.container === props.rent.container) {
        setRealtimeData(data);
      }
    });

    ws.emit("lastData", props.rent.container);
  };

  useEffect(() => {
    setWs(
      webSocket(
        process.env.REACT_APP_BACKEND_HOST || `${window.location.origin}/`,
        {
          transports: ["websocket"],
        }
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const registerDisconnectHandler = () => {
    ws.on("disconnect", () => {
      console.log("Disconnected");
      ws.close();
    });
  };

  if (props.path !== `${window.location.origin}/main`) {
    registerDisconnectHandler();
  }

  const plantIMG = `${
    props.rent.plant.imgPath
  }`;

  return (
    <div class=" w-full h-[307.64px] flex flex-row justify-center mt-20 mb-20 tablet:h-[264.59px] tablet:mt-0 tablet:mb-10 phone:mt-10 phone:h-full">
      <div class="flex justify-center w-[1560px] phone:flex-wrap gap-[120px] tablet:gap-[16px] px-20">
        <div class="pt-10 pb-10 flex flex-col  justify-center  tablet:pr-10 phone:py-4">
          <div class="flex flex-row">
            <img src={humid} class="w-12 h-12 mr-4 mt-4" alt="humid"></img>
            <div>
              <h2 class="font-bold text-[48px] tablet:text-[24px] phone:text-[20px]">
                {realtimeData.soilHumid}%
              </h2>
              <h5 class="text-[20px] tablet:text-[14px] phone:text-[12px]">
                土壤濕度
              </h5>
            </div>
          </div>
          <div class="flex flex-row">
            <img src={lightImg} class="w-12 h-12 mr-4 mt-4" alt="light"></img>
            <div>
              <h2 class="font-bold text-[48px] tablet:text-[24px] phone:text-[20px]">
                {realtimeData.light} lx
              </h2>
              <h5 class="text-[20px] tablet:text-[14px] phone:text-[12px]">
                光照強度
              </h5>
            </div>
          </div>
        </div>
        <div class="flex justify-center phone:mt-0 grow">
          <img
            src={plantIMG}
            class="w-[412px] h-[320px] tablet:w-[240px] tablet:h-[184.59px] tablet:mx-4 tablet:my-10 phone:w-[200px] phone:h-[153.82px] rounded-[24px] object-cover"
            alt="plant"
          ></img>
        </div>
        <div class=" tablet:mt-[17.29px] tablet:pl-5 relative">
          <div class="flex flex-row phone:justify-center">
            <Typography class="mt-10 font-bold text-[32px] tablet:text-[20px] phone:text-[16px]">
              {props.rent.plant.name}
            </Typography>
            <Typography class="text-center mt-12 ml-20 text-[#6B7280] text-[24px] tablet:text-[14px] tablet:ml-10 phone:text-[14px] phone:ml-4">
              {props.rent.plant.nickname}
            </Typography>
          </div>
          <Typography class="mt-8 w-[219px] text-[#6B7280]  text-[20px] tablet:text-[14px] tablet:w-[151px] tablet:mt-5 phone:w-[200px] phone:h-[84px] whitespace-pre-line">
            {props.rent.plant.intro}
          </Typography>
          <button
            type="button"
            class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900 absolute right-0 bottom-0"
            onClick={() => navigate(`/rent/edit/${props.rent.id}`)}
          >
            編輯
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatePlant;
