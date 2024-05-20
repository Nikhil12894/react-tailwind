import { Schedule } from "@/types/schedule-type";
import axios from "axios";

const BASE_URL = "http://localhost:8080/";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getAllSchedules = async () => {
  return (await axiosInstance.get<Schedule[]>("todos")).data.map(
    (todo) => todo.id
  );
};
