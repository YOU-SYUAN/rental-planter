import StatePlant from "../components/StatePlant";

const State = (props) => {
  return (
    <div class="mt-[60px] justify-center tablet:pt-5 tablet:mt-0 phone:mt-4">
      <div class="justify-center">
        <div>
          <h1 class=" text-center font-extrabold text-[44px] tablet:text-[20px] phone:text-[18px]">
            盆栽狀態
          </h1>
        </div>
        {props.rents
          .filter((x) => x.plant !== null)
          .map((x) => (
            <StatePlant key={x.id} rent={x} path={props.path}></StatePlant>
          ))}
      </div>
    </div>
  );
};

export default State;
