import emailIcon from "../assets/img3.png";
function Waitline(props) {
  return (
    <div class="flex flex-row h-[73px] w-[520px] rounded-[48px] mx-4 ">
      {/* 資訊 */}
      <div class="flex flex-col w-[415px] ml-[30.5px] mt-2">
        <label>{props.data.name}</label>
        <label>{props.data.email}</label>
      </div>
      <div>
        <img src={emailIcon} class="mt-4"></img>
      </div>
    </div>
    // <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    //   <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    //     <tbody>
    //       <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
    //         <th
    //           scope="row"
    //           class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[415px]"
    //         >
    //           {props.data.name}
    //           <br></br>
    //           <label>{props.data.email}</label>
    //         </th>
    //         <td class="py-4 px-6">
    //           <img src={emailIcon} class=""></img>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
  );
}

export default Waitline;
