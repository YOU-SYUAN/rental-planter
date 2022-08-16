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

const getUser = () => request.get("/user");

const userLogin = (data) => request.post("/user/login", data);
const userRegister = (data) => request.post("/user/register", data);

const updatePlant = (formData) =>
  request.post("/rent/plantInfo", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });

const getRentedAmount = () => request.get("/admin/rentedAmount");
const getWaitList = () => request.get("/admin/waitList");
const getRentedInfo = () => request.get("/admin/rentedInfo");
const addAdmin = (data) => request.post("/admin/addAdmin", data);

export {
  userLogin,
  userRegister,
  addAdmin,
  getUser,
  updatePlant,
  getRentedAmount,
  getWaitList,
  getRentedInfo,
};
