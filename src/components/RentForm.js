import plant from "../assets/plant.png";
function RentForm() {
  return (
    <div class="w-[1280px] h-[720px] border-4 border-[#CACACA] rounded-3xl tablet:w-[416px] tablet:h-[795px]">
      <h1 class="text-center text-[32px] font-semibold pt-12 tablet:pt-[20px] tablet:text-[20px]">
        租借表單
      </h1>
      <div class="flex flex-wrap flex-row">
        {/* 上傳圖片 */}
        <div class="flex justify-center items-center w-[480px] h-[480px] pl-[56px] tablet:w-[352px] tablet:h-[220px] tablet:mt-6">
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
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 480x480px)
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
        {/* 植物資料 */}
        <div class="mt-[69px] ml-9 tablet:mt-6 tablet:ml-8">
          <div class="relative z-0 mb-6 w-[660px] group tablet:w-[364px]">
            <input
              type="text"
              name="variety"
              id="variety"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#519E75] focus:outline-none focus:ring-0 focus:border-[#519E75] peer"
              placeholder=" "
              required
            />
            <label
              for="variety"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#519E75] peer-focus:dark:text-[#519E75] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              植物品種
            </label>
          </div>
          <div class="relative z-0 mb-6 w-[660px] group tablet:w-[364px]">
            <input
              type="text"
              name="nickname"
              id="nickname"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#519E75] focus:outline-none focus:ring-0 focus:border-[#519E75] peer"
              placeholder=" "
              required
            />
            <label
              for="nickname"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#519E75] peer-focus:dark:text-[#519E75] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              植物暱稱
            </label>
          </div>
          <div class="relative z-0 mb-6 w-[660px] group tablet:w-[364px]">
            <input
              type="number"
              name="minHumid"
              id="minHumid"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#519E75] focus:outline-none focus:ring-0 focus:border-[#519E75] peer"
              placeholder=" "
              required
            />
            <label
              for="minHumid"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#519E75] peer-focus:dark:text-[#519E75] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              最低土壤溼度標準
            </label>
          </div>
          <div class="relative z-0 mb-6 w-[660px] h-[156px] group tablet:w-[364px] tablet:h-[120px]">
            <input
              type="text"
              name="introduction"
              id="introduction"
              class="block py-2.5 px-0 w-full h-[156px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#519E75] focus:outline-none focus:ring-0 focus:border-[#519E75] peer tablet:h-[120px]"
              placeholder=" "
              required
            />
            <label
              for="introduction"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#519E75] peer-focus:dark:text-[#519E75] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              植物簡介
            </label>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <button class="h-[54px] w-[140px] bg-[#858585] text-white rounded-lg mr-12 tablet:h-[41px] tablet:w-[120px]">
          取消
        </button>
        <button class="h-[54px] w-[140px] bg-[#FFC700] rounded-lg mr-[68px] tablet:h-[41px] tablet:w-[120px]">
          確定
        </button>
      </div>
    </div>
  );
}
export default RentForm;
