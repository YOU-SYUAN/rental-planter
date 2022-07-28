import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav>
      <div class="ml-[140px] mt-6 mr-[140px] mb-6 flex flex-row flex-wrap justify-between items-center tablet:mx-9 ">
        <img
          src={logo}
          class="mr-3 h-6 tablet:w-[74px] tablet:h-[45.71px] phone:w-12 phone:h-[34.29px]"
          alt="Logo"
        />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center text-sm text-gray-500 rounded-lg tablet:hidden desktop:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-name="立即租借"
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="flex items-center text-[20px] tablet:text-[16px]">
          <a href="" class="mr-8 phone:hidden">
            系統介紹
          </a>
          <a class="mr-8 phone:hidden">盆栽狀態</a>
          <a href="" class="phone:hidden">
            會員植物
          </a>
        </div>
        {/* rounded-lg -> 8px */}
        <button class="bg-[#519E75] text-white w-20 h-9 rounded-lg phone:hidden">
          租借盆器
        </button>
        {/* <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        ></button> */}
      </div>
    </nav>
  );
}
export default Navbar;
