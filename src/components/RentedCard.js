function RentedCard(props) {
  return (
    <div
      class="rounded-[48px] h-[120px] w-[240px] flex flex-row mr-12"
      style={{ backgroundColor: props.data.bgColor }}
    >
      <div class="mt-4 ml-6">
        <img src={props.data.img}></img>
      </div>
      <div class="text-white ml-6 py-4 mt-4 flex flex-col justify-center items-center">
        <h2 class="text-[20px]">{props.data.state}</h2>
        <label class="text-[60px]">{props.data.amount}</label>
      </div>
    </div>
  );
}

export default RentedCard;
