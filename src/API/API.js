import endpoints from "./endpoints.json";
import axios from "axios";

// for own server
export const myApiInstance = axios.create({
  baseURL: endpoints.myServerURL,
});

export const reqResInstance = axios.create({
  baseURL: endpoints.reuResURL,
});

export const typicodeInstance = axios.create({
  baseURL: endpoints.typicodeURL,
});
