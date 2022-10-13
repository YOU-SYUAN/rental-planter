//統一管理api
import axios from "axios";
const request = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_HOST || ""}/api`,
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
const changePassword = (data) =>
  request.put("/user/password", data, {
    headers: {
      "Content-Type": "application/json",
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

// rent methods
const registerRent = () =>
  request.post(
    "/rent/register",
    {},
    {
      headers: {
        "Content-Type": "application/json",
        "Auth-Method": "JWT",
        Auth: localStorage.getItem("token"),
      },
    }
  );
const addPlant = (formData) =>
  request.post("/rent/plantInfo", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });

const modifyPlant = (id, formData) =>
  request.put(`/rent/plantInfo/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
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
const setRentTaken = (id) =>
  request.put(`/admin/rent/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });
const deleteRented = (id) =>
  request.delete(`/admin/rent/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });

const getMemberList = () =>
  request.get("/admin/members", {
    headers: {
      "Content-Type": "application/json",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });

const updateAPIMembers = () =>
  request.put(
    "/admin/admins",
    {},
    {
      headers: {
        "Content-Type": "application/json",
        "Auth-Method": "JWT",
        Auth: localStorage.getItem("token"),
      },
    }
  );

const updateMemberData = (id) =>
  request.put(
    `/admin/member/${id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        "Auth-Method": "JWT",
        Auth: localStorage.getItem("token"),
      },
    }
  );

const deleteMember = (id) =>
  request.delete(`/admin/member/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });

const getAdminList = () =>
  request.get("/admin/admin", {
    headers: {
      "Content-Type": "application/json",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });
const addAdmin = (data) =>
  request.post("/admin/admin", data, {
    headers: {
      "Content-Type": "application/json",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });
const deleteAdmin = (id) =>
  request.delete(`/admin/admin/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });

const getConfig = () =>
  request.get("/admin/config", {
    headers: {
      "Content-Type": "application/json",
      "Auth-Method": "JWT",
      Auth: localStorage.getItem("token"),
    },
  });

const updateConfig = (data) =>
  request.put("/admin/config", data, {
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
