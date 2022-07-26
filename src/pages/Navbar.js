import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav>
      <div class="ml-[140px] mt-6 mr-[140px] mb-6 flex flex-row flex-wrap justify-between items-center">
        <img src={logo} class="mr-3 h-6 sm:h-9" alt="Logo" />
        <div class="flex items-center">
          <a href="" class="mr-8">
            系統介紹
          </a>
          <a class="mr-8">盆栽狀態</a>
          <a href>會員植物</a>
        </div>
        {/* rounded-lg -> 8px */}
        <button class="bg-[#519E75] text-white w-20 h-9 rounded-lg">
          租借盆器
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
