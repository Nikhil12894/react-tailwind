import { WebResponse } from "@/types/response-obj";
import {
  Schedule,
  ScheduleDTOList,
  ScheduleRequest,
  getShotBy,
} from "@/types/schedule-type";
import { TaskList, getTaskShotBy } from "@/types/task-type";
import { PaginationState } from "@tanstack/react-table";
import axios from "axios";

const BASE_URL = "http://localhost:8080/taskservice/api/"; //import.meta.env.API_BASE_URL
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getAllSchedules = async (
  pagination: PaginationState,
  sort: { id: string; desc: boolean },
  rowSelection: {},
  columnFilters: {}
) => {
  console.log(pagination, sort, rowSelection, columnFilters);
  return (
    await axiosInstance.get<WebResponse<ScheduleDTOList>>(
      `schedule/all?page=${pagination.pageIndex + 1}&page_size=${
        pagination.pageSize
      }&sort_order=${sort.desc ? "DESC" : "ASC"}&sort_by=${getShotBy(sort.id)}`
    )
  ).data;
};

export const createSchedule = async (data: ScheduleRequest) => {
  return (await axiosInstance.post<WebResponse<Schedule>>("schedule", data))
    .data;
};
export const updateSchedule = async (data: ScheduleRequest) => {
  return (await axiosInstance.put<WebResponse<Schedule>>("schedule", data))
    .data;
};

export const deleteSchedule = async (data: string) => {
  return (
    await axiosInstance.delete<WebResponse<Schedule>>(
      `schedule?schedule_id=${data}`
    )
  ).data;
};

export const getAllTasks = async (
  pagination: PaginationState,
  sort: { id: string; desc: boolean },
  rowSelection: {},
  columnFilters: {}
) => {
  console.log(pagination, sort, rowSelection, columnFilters);
  return (
    await axiosInstance.get<WebResponse<TaskList>>(
      `task/all?page=${pagination.pageIndex + 1}&page_size=${
        pagination.pageSize
      }&sort_order=${sort.desc ? "DESC" : "ASC"}&sort_by=${getTaskShotBy(
        sort.id
      )}`
    )
  ).data;
};
