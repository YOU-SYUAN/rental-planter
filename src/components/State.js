import StatePlant from "../components/StatePlant";

const State = (props) => {
  return (
    <div class="desktop:mt-[60px] tablet:mt-5 mt-4 w-full desktop:max-w-[1560px] tablet:max-w-[768px] max-w-[375px]">
      <h1 class=" text-center font-extrabold text-[44px] tablet:text-[20px] phone:text-[18px]">
        盆栽狀態
      </h1>
      {props.rents
        .filter((x) => x.plant !== null)
        .map((x) => (
          <StatePlant key={x.id} rent={x} path={props.path}></StatePlant>
        ))}
    </div>
  );
};

export default State;
