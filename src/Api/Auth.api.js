import axios from "./axios";

export const registerRequest = (data) => {
  return axios.post("/register", data);
};
