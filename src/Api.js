//統一管理api
import axios from "axios";
const request = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_HOST || ""}/api`,
});

const jsonHeader = () => ({
  "Content-Type": "application/json",
});

const jsonAuthHeader = (auth) => ({
  "Content-Type": "application/json",
  "Auth-Method": "JWT",
  Auth: auth,
});

const formAuthHeader = (auth) => ({
  "Content-Type": "multipart/form-data",
  "Auth-Method": "JWT",
  Auth: auth,
});

// user methods
const getUser = () =>
  request.get("/user", {
    headers: jsonAuthHeader(localStorage.getItem("token")),
  });

const userLogin = (data) =>
  request.post("/user/login", data, jsonHeader());

const userRegister = (data) =>
  request.post("/user/register", data, jsonHeader());

const forgetPassword = (data) =>
  request.post("/user/password", data, jsonHeader());

const changePassword = (data) =>
  request.put("/user/password", data, {
    headers: jsonAuthHeader(localStorage.getItem("token")),
  });

const getOtherPlant = () =>
  request.get("/rent/list/others", {
    headers: jsonAuthHeader(localStorage.getItem("token")),
  });

// rent methods
const registerRent = () =>
  request.post(
    "/rent/register",
    {},
    { headers: jsonAuthHeader(localStorage.getItem("token")) }
  );
const addPlant = (formData) =>
  request.post("/rent/plantInfo", formData, {
    headers: formAuthHeader(localStorage.getItem("token")),
  });

const modifyPlant = (id, formData) =>
  request.put(`/rent/plantInfo/${id}`, formData, {
    headers: formAuthHeader(localStorage.getItem("token")),
  });

// admin methods
const getRentedInfo = () =>
  request.get("/admin/rentedInfo", {
    headers: jsonAuthHeader(localStorage.getItem("token")),
  });
const getWaitList = () =>
  request.get("/admin/waitList", {
    headers: jsonAuthHeader(localStorage.getItem("token")),
  });
const getRentedAmount = () =>
  request.get("/admin/rentedAmount", {
    headers: jsonAuthHeader(localStorage.getItem("token")),
  });
const setRentTaken = (id) =>
  request.put(`/admin/rent/${id}`, {
    headers: jsonAuthHeader(localStorage.getItem("token")),
  });
const deleteRented = (id) =>
  request.delete(`/admin/rent/${id}`, {
    headers: jsonAuthHeader(localStorage.getItem("token")),
  });

const getMemberList = () =>
  request.get("/admin/members", {
    headers: jsonAuthHeader(localStorage.getItem("token")),
  });

const updateAPIMembers = () =>
  request.put(
    "/admin/admins",
    {},
    { headers: jsonAuthHeader(localStorage.getItem("token")) }
  );

const updateMemberData = (id) =>
  request.put(
    `/admin/member/${id}`,
    {},
    { headers: jsonAuthHeader(localStorage.getItem("token")) }
  );

const deleteMember = (id) =>
  request.delete(`/admin/member/${id}`, {
    headers: jsonAuthHeader(localStorage.getItem("token")),
  });

const getAdminList = () =>
  request.get("/admin/admin", {
    headers: jsonAuthHeader(localStorage.getItem("token")),
  });
const addAdmin = (data) =>
  request.post("/admin/admin", data, {
    headers: jsonAuthHeader(localStorage.getItem("token")),
  });
const deleteAdmin = (id) =>
  request.delete(`/admin/admin/${id}`, {
    headers: jsonAuthHeader(localStorage.getItem("token")),
  });

const getConfig = () =>
  request.get("/admin/config", {
    headers: jsonAuthHeader(localStorage.getItem("token")),
  });

const updateConfig = (data) =>
  request.put("/admin/config", data, {
    headers: jsonAuthHeader(localStorage.getItem("token")),
  });

export {
  userLogin,
  userRegister,
  addAdmin,
  getUser,
  addPlant,
  modifyPlant,
  getRentedAmount,
  getWaitList,
  getRentedInfo,
  deleteRented,
  registerRent,
  setRentTaken,
  forgetPassword,
  changePassword,
  getOtherPlant,
  getMemberList,
  updateAPIMembers,
  updateMemberData,
  deleteMember,
  getAdminList,
  deleteAdmin,
  getConfig,
  updateConfig,
};
