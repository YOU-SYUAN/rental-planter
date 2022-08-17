import React from "react";
import "../pages/App.js";

export default function Popup(props) {
  return props.trigger ? (
    <div className="popup" class="flex justify-center">
      <div className="popup-inner">
        <div class="relative w-[480px] h-[520px] bg-white max-w-lg rounded-lg mt-[64px] shadow dark:bg-gray-700 py-12 phone:w-[343px] phone:h-[387px]">
          <p class="text-[32px] text-center font-semibold phone:text-[24px]">
            新增管理員
          </p>
          <div class="relative mt-[48px]">
            <div class=" px-8 desktop:px-8">
              <form class="" action="#">
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-[20px] font-medium text-gray-900 dark:text-gray-300 phone:text-[14px]"
                  >
                    姓名
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name"
                    required=""
                  />
                </div>
                <div class="mt-6">
                  <label
                    for="email"
                    class="block mb-2 text-[20px] font-medium text-gray-900 dark:text-gray-300 phone:text-[14px]"
                  >
                    電子郵件
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@company.com"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required=""
                  />
                </div>
                <div class="grid grid-col-2 grid-flow-col space-between">
                  <div class="">
                    {/* <label class="text-[#FF0000] ">{errorMsg}</label> */}
                  </div>
                </div>
                <button
                  type="button"
                  class="w-full mt-6 text-white bg-[#519E75] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[20px] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 phone:mt-6"
                >
                  新增
                </button>
                <button
                  className="close-btn"
                  onClick={() => props.setButtonPop(false)}
                  type="button"
                  class="w-full mt-6 text-white bg-[#929292] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[20px] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 phone:mt-6"
                >
                  取消
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
