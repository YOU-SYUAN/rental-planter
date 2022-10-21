const RentedCard = (props) => {
  return (
    <div
      className="rounded-[48px] h-[120px] w-[240px] flex flex-row mr-12"
      style={{ backgroundColor: props.data.bgColor }}
    >
      <div className="mt-4 ml-6">
        <img className="h-[88px] w-[88px] object-cover" src={props.data.img} alt="card icon"></img>
      </div>
      <div className="text-white ml-6 py-4 flex flex-col justify-center items-center">
        <span className="text-[20px]">{props.data.state}</span>
        <span className="text-[60px] leading-none">{props.data.amount}</span>
      </div>
    </div>
  );
}

export default RentedCard;
