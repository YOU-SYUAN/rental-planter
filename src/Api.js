//統一管理api
import axios from "axios";
const userRequest = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_HOST,
  headers: { "Content-Type": "application/json" },
});

const userLogin = (data) => userRequest.post("./api/user/login", data);
const userRegister = (data) => userRequest.post("./api/user/register", data);
export { userLogin, userRegister };
