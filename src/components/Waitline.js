import emailIcon from "../assets/img3.png";

const Waitline = (props) => {
  return (
    <div className="flex flex-row h-[73px] w-[520px] rounded-[48px] mx-4 ">
      {/* 資訊 */}
      <div className="flex flex-col w-[415px] ml-[30.5px] mt-2">
        <label>{props.data.name}</label>
        <label>{props.data.email}</label>
      </div>
      <button
        onClick={() => window.open(`mailto:${props.data.email}`, "_blank")}
      >
        <img src={emailIcon} className="mt-4" alt="email"></img>
      </button>
    </div>
  );
};

export default Waitline;
