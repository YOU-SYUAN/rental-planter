import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import RentedCard from "../components/RentedCard";
import Waitline from "../components/Waitline";
function Admin() {
  const data = [
    {
      img: img1,
      amount: 6,
      bgColor: "#519E75",
      state: "已租",
    },
    {
      img: img2,
      amount: 4,
      bgColor: "#FFC700",
      state: "未租",
    },
  ];
  const info = [
    { name: "Kristin Watson", email: "xxfdwtr4e89tjs5r@gmail.com" },
    { name: "Ralph Edwards", email: "g7s4e894rt4@gmail.com" },
    { name: "Ralph Edwards", email: "g7s4e894rt4@gmail.com" },
    { name: "Ralph Edwards", email: "g7s4e894rt4@gmail.com" },
    { name: "Ralph Edwards", email: "g7s4e894rt4@gmail.com" },
    { name: "Ralph Edwards", email: "g7s4e894rt4@gmail.com" },
    { name: "Ralph Edwards", email: "g7s4e894rt4@gmail.com" },
    { name: "Ralph Edwards", email: "g7s4e894rt4@gmail.com" },
    { name: "Ralph Edwards", email: "g7s4e894rt4@gmail.com" },
  ];
  return (
    // 最外層
    <div class="grid grid-col-12 grid-flow-col">
      {/* 左半邊 */}
      <div class="grid col-end-5">
        <div>
          <h1 class="text-[28px]">租借數量</h1>
          <div class="flex flex-row">
            {data.map((item) => (
              <RentedCard key={item} data={item}></RentedCard>
            ))}
          </div>
        </div>
        <div>
          <h1 class="text-[28px]">候補名單</h1>
          <div class=" w-[552px] h-[520px] overflow-scroll">
            {info.map((item) => (
              <Waitline key={item} data={item}></Waitline>
            ))}
          </div>
          {/* <Waitline></Waitline> */}
        </div>
      </div>
      {/* 右半邊 */}
      <div class="grid col-start-6 col-span-7"></div>
    </div>
  );
}

export default Admin;
