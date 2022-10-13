import background from "../assets/registerIMG.png";
import plantIMG from "../assets/bg.png";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { userRegister } from "../Api";

const Register = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const email = useRef(undefined);
  let navigate = useNavigate();

  const confirm = async () => {
    try {
      const post1 = await userRegister({ email: email.current.value });
      if (post1.status === 200) {
        alert("註冊成功！請檢查電子郵件！");
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 404) {
        setErrorMsg("您還不是 Monospace 的會員！");
      } else if (error.response.status === 409) {
        alert("您已經是本系統的會員！請登入！");
        navigate("/");
      }
    }
  };

  return (
    <div
      class="relative bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${background})`, height: "100vh" }}
    >
      <div class="w-[1200px] h-[540px] rounded-3xl bg-white flex flex-row">
        <div class="">
          <img src={plantIMG} class="rounded-l-3xl" alt="plant"></img>
        </div>
        <div class="flex justify-center w-[560px]">
          <div class="flex flex-wrap flex-col pt-[32px]">
            <h1 class="text-center text-[40px]  pt-12 tablet:pt-[20px] tablet:text-[20px] font-Nova_Flat font-normal">
              開始註冊
            </h1>
            <h2 class="text-[20px] text-center text-[#929292] tracking-widest font-normal">
              Rental Planter
            </h2>
            <div class="mt-[60px]">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-black"
              >
                電子郵件
              </label>
              <input
                type="email"
                id="email"
                ref={email}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[386px] h-[42px]"
                placeholder="輸入 Monospace 會員電子郵件"
                required
              />
            </div>
            <div class="flex flex-col justify-center mt-12">
              <div>
                <label class="text-[#FF0000] ">{errorMsg}</label>
              </div>
              <button
                onClick={confirm}
                class="w-[386px] h-[42px] text-[20px] bg-[#519E75] text-white rounded-lg mr-12 "
              >
                註冊
              </button>
            </div>
            <div class=" mt-2">
              <label class="text-gray-500">已有帳號了?</label>
              <a href="./" class="text-[#1C64F2]">
                登入
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
