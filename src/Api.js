//統一管理api
import axios from "axios";
const request = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_HOST}/api` || "/api",
  headers: {
    "Content-Type": "application/json",
    "Auth-Method": "JWT",
    Auth: localStorage.getItem("token"),
  },
});

// user methods
const getUser = () => request.get("/user");
const userLogin = (data) => request.post("/user/login", data);
const userRegister = (data) => request.post("/user/register", data);
const forgetPassword = (data) => request.post("/user/password", data);
const changePassword = (data) => request.put("/user/password", data);

// rent methods
const getOtherRents = () => request.get("/rent/list/others");
const registerRent = () => request.post("/rent/register");
const updatePlant = (formData) =>
  request.post("/rent/plantInfo", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });

const getOtherPlant = () => request.get("/rent/list/others");

// admin methods
const getRentedInfo = () => request.get("/admin/rentedInfo");
const getWaitList = () => request.get("/admin/waitList");
const getRentedAmount = () => request.get("/admin/rentedAmount");
const addAdmin = (data) => request.post("/admin/addAdmin", data);
const setRentTaken = (rentId) => request.put(`/admin/rent/${rentId}`);
const deleteRented = (rentId) => request.delete(`/admin/rent/${rentId}`);

export {
  userLogin,
  userRegister,
  addAdmin,
  getUser,
  updatePlant,
  getRentedAmount,
  getWaitList,
  getRentedInfo,
  deleteRented,
  getOtherRents,
  registerRent,
  setRentTaken,
  forgetPassword,
  changePassword,
  getOtherPlant,
};
