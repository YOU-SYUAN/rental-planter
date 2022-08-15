import background from "../assets/formbg.png";
import vector from "../assets/Vector.png";
import axios from "axios";
import { useEffect } from "react";

function RentForm() {
  useEffect(() => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      axios
        .post("http://192.168.168.83:3000/api/rent/plantInfo", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Auth-Method": "JWT",
            Auth: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);
  // const uploadIMG = document.getElementById("uploadIMG");
  // const showIMG = document.getElementById("showIMG");
  // function Change() {
  //   console.log(uploadIMG);
  //   var file = uploadIMG;
  //   var reader = new FileReader();
  //   reader.onload = function (e) {
  //     showIMG.attr("src", e.target.result);
  //   };
  //   reader.readAsText(file);
  //   // reader.readAsDataURL(file);
  // }
  return (
    <div
      class=" w-full"
      style={{ backgroundImage: `url(${background})`, height: "100vh" }}
    >
      <div class="flex flex-col items-center justify-center">
        <div class="w-[1280px] h-[720px] mt-[180px] tablet:w-[416px] tablet:h-[795px]">
          <form id="form">
            <input type="hidden" name="rent" value="21" />
            <div class="flex flex-row  bg-white rounded-3xl">
              {/* 上傳圖片 */}
              <div class="w-[543px] h-[720px] bg-[#519E75] rounded-3xl">
                <div
                  id="showIMG"
                  class="flex justify-center items-center mt-[120px] w-[480px] h-[480px] mx-[31px] tablet:w-[352px] tablet:h-[220px] tablet:mt-6"
                >
                  <label
                    for="uploadIMG"
                    class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        class="mb-3 w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        jpeg, PNG, JPG (MAX. 480x480px)
                      </p>
                    </div>
                    <input
                      id="uploadIMG"
                      type="file"
                      name="image"
                      class="hidden"
                      accept=".jpeg, .jpg, .png"
                    />
                  </label>
                </div>
              </div>
              {/* <div class="w-[543px] h-[720px] bg-[#519E75] rounded-3xl">
                <div class="flex justify-center items-center mt-[120px] w-[480px] h-[480px] mx-[31px] tablet:w-[352px] tablet:h-[220px] tablet:mt-6">
                  <label
                    for="dropzone-file"
                    class="flex flex-col justify-center items-center w-[480px] h-[480px] tablet:w-[352px] tablet:h-[220px] bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        class="mb-3 w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG or jpeg (MAX. 480x480px)
                      </p>
                    </div>
                    <input
                      id="uploadIMG"
                      type="file"
                      class="hidden"
                      accept=".png, .jpg, .jpeg"
                    />
                  </label>
                </div>
              </div> */}
              {/* 植物資料 */}
              <div class="mt-[69px] ml-9 tablet:mt-6 tablet:ml-8 ">
                <h1 class="text-left text-[32px]  font-semibold pt-12 tablet:pt-[20px] tablet:text-[20px]">
                  租借表單
                </h1>
                <div class="relative z-0 mb-6 mt-[69px] w-[660px] group tablet:w-[364px]">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#519E75] focus:outline-none focus:ring-0 focus:border-[#519E75] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="name"
                    class="peer-focus:font-medium absolute text-[18px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#519E75] peer-focus:dark:text-[#519E75] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    植物品種
                  </label>
                </div>
                <div class="relative z-0 mb-6 w-[660px] group tablet:w-[364px]">
                  <input
                    type="text"
                    name="nickname"
                    id="nickname"
                    class="block py-2.5 px-0 w-full text-[18px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#519E75] focus:outline-none focus:ring-0 focus:border-[#519E75] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="nickname"
                    class="peer-focus:font-medium absolute text-[18px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#519E75] peer-focus:dark:text-[#519E75] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    植物暱稱
                  </label>
                </div>
                <div class="relative z-0 mb-6 w-[660px] group tablet:w-[364px]">
                  <input
                    type="number"
                    name="minHumid"
                    id="minHumid"
                    class="block py-2.5 px-0 w-full text-[18px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#519E75] focus:outline-none focus:ring-0 focus:border-[#519E75] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="minHumid"
                    class="peer-focus:font-medium absolute text-[18px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#519E75] peer-focus:dark:text-[#519E75] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    最低土壤溼度標準
                  </label>
                  <div class="flex flex-row mt-2">
                    <img src={vector} class="mr-2 mt-1 h-3 w-3 "></img>
                    <label class="text-gray-500">說明</label>
                  </div>
                </div>

                <div class="relative z-0 mb-6 w-[660px] h-[156px] group tablet:w-[364px] tablet:h-[120px]">
                  <input
                    type="text"
                    name="intro"
                    id="introduction"
                    class="block py-2.5 px-0 w-full h-[156px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#519E75] focus:outline-none focus:ring-0 focus:border-[#519E75] peer tablet:h-[120px]"
                    placeholder=" "
                    required
                  />
                  <label
                    for="intro"
                    class="peer-focus:font-medium absolute text-[18px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#519E75] peer-focus:dark:text-[#519E75] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    植物簡介
                  </label>
                </div>
                <div class="flex justify-end mt-2">
                  <button class="h-[54px] w-[140px] text-[20px] bg-[#707070] text-white rounded-lg mr-12 tablet:h-[41px] tablet:w-[120px]">
                    取消
                  </button>
                  <input
                    id="uploadInfo"
                    type="submit"
                    value="確定"
                    class="h-[54px] w-[140px] text-[20px] bg-[#FFC700] rounded-lg mr-[68px] tablet:h-[41px] tablet:w-[120px]"
                  ></input>
                  {/* <button class="h-[54px] w-[140px] text-[20px] bg-[#FFC700] rounded-lg mr-[68px] tablet:h-[41px] tablet:w-[120px]">
                    確定
                  </button> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default RentForm;
