function RentedCard(props) {
  return (
    <div
      class="rounded-[48px] h-[120px] w-[240px] flex flex-row mr-12"
      style={{ backgroundColor: props.data.bgColor }}
    >
      <div class="mt-4 ml-6">
        <img class="h-[88px] w-[88px]" src={props.data.img}></img>
      </div>
      <div class="text-white ml-6 py-4 flex flex-col justify-center items-center">
        <span class="text-[20px]">{props.data.state}</span>
        <span class="text-[60px] leading-none">{props.data.amount}</span>
      </div>
    </div>
  );
}

export default RentedCard;
