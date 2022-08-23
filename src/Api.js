//統一管理api
import axios from "axios";
const request = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_HOST || ''}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// user methods
const getUser = () =>
  request.get("/user", {
    headers: {
      "Content-Type": "application/json",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });
const userLogin = (data) => request.post("/user/login", data);
const userRegister = (data) => request.post("/user/register", data);
const forgetPassword = (data) => request.post("/user/password", data);
const changePassword = (data) => request.put("/user/password", data);

// rent methods
const getOtherRents = () =>
  request.get("/rent/list/others", {
    headers: {
      "Content-Type": "application/json",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });
const registerRent = () =>
  request.post("/rent/register", {}, {
    headers: {
      "Content-Type": "application/json",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });
const updatePlant = (formData) =>
  request.post("/rent/plantInfo", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });

const getOtherPlant = () =>
  request.get("/rent/list/others", {
    headers: {
      "Content-Type": "application/json",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });

// admin methods
const getRentedInfo = () =>
  request.get("/admin/rentedInfo", {
    headers: {
      "Content-Type": "application/json",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });
const getWaitList = () =>
  request.get("/admin/waitList", {
    headers: {
      "Content-Type": "application/json",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });
const getRentedAmount = () =>
  request.get("/admin/rentedAmount", {
    headers: {
      "Content-Type": "application/json",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });
const addAdmin = (data) =>
  request.post("/admin/addAdmin", data, {
    headers: {
      "Content-Type": "application/json",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });
const setRentTaken = (rentId) =>
  request.put(`/admin/rent/${rentId}`, {
    headers: {
      "Content-Type": "application/json",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });
const deleteRented = (rentId) =>
  request.delete(`/admin/rent/${rentId}`, {
    headers: {
      "Content-Type": "application/json",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });

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
