import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.weatherbit.io/v2.0/"
});
export const key = "9c25e9712b3d4024a5dd587db62a0205";
