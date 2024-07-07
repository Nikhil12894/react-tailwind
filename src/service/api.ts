import { Post, PostRequest, PostsDTO, getPostShotBy } from "@/types/posst-type";
import { WebResponse } from "@/types/response-obj";
import {
  Schedule,
  ScheduleDTOList,
  ScheduleRequest,
  getShotBy,
} from "@/types/schedule-type";
import { Task, TaskList, TaskRequest, getTaskShotBy } from "@/types/task-type";
import { PaginationState } from "@tanstack/react-table";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getAllSchedules = async (
  pagination: PaginationState,
  sort: { id: string; desc: boolean },
  rowSelection: {},
  columnFilters: {}
) => {
  console.log(BASE_URL);
  console.log(pagination, sort, rowSelection, columnFilters);
  return (
    await axiosInstance.get<WebResponse<ScheduleDTOList>>(
      `schedule/all?page=${pagination.pageIndex + 1}&page_size=${
        pagination.pageSize
      }&sort_order=${sort.desc ? "DESC" : "ASC"}&sort_by=${getShotBy(sort.id)}`
    )
  ).data;
};

export const getAllSchedulesIDs = async () => {
  return (
    await axiosInstance.get<WebResponse<string[]>>(`schedule/all-schedule-id`)
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
    await axiosInstance.delete<WebResponse<boolean>>(
      `schedule?schedule_id=${data}`
    )
  ).data;
};

// Task API
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

export const createTask = async (data: TaskRequest) => {
  return (await axiosInstance.post<WebResponse<Task>>("task", data)).data;
};
export const updateTask = async (data: TaskRequest) => {
  return (await axiosInstance.put<WebResponse<Task>>("task", data)).data;
};

export const deleteTask = async (data: number) => {
  return (
    await axiosInstance.delete<WebResponse<boolean>>(
      `task/with-id?task_id=${data}`
    )
  ).data;
};

//post Api

export const getAllPosts = async (
  pagination: PaginationState,
  sort: { id: string; desc: boolean }
) => {
  console.log(pagination, sort);
  return (
    await axiosInstance.get<WebResponse<PostsDTO>>(
      `post/all?page=${pagination.pageIndex + 1}&page_size=${
        pagination.pageSize
      }&sort_order=${sort.desc ? "DESC" : "ASC"}&sort_by=${getPostShotBy(
        sort.id
      )}`
    )
  ).data;
};

export const createPost = async (data: PostRequest) => {
  return (await axiosInstance.post<WebResponse<Post>>("post", data)).data;
};
