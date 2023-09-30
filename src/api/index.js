import { API_URLS, API_SIGNIN, API_SIGNUP } from "../utils/constants";
import axios from "axios";

export const fetchAllCapsules = async () => {
  const response = await axios.get(API_URLS.allCapsules());
  const data = response.data;
  return data;
};

export const apiLogin = async (email, password) => {
  const response = await axios.post(API_SIGNIN, { email, password });
  const data = response.data;
  return data;
};

export const apiSignUp = async (name, email, password) => {
  const response = await axios.post(API_SIGNUP, { name, email, password });
  const data = response.data;
  return data;
};
