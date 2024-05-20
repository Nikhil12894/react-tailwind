import { WebResponse } from "@/types/response-obj";
import { ScheduleDTOList, getShotBy } from "@/types/schedule-type";
import { PaginationState } from "@tanstack/react-table";
import axios from "axios";

const BASE_URL = "http://localhost:8080/taskservice/api/";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getAllSchedules = async (
  pagination: PaginationState,
  sort: { id: string; desc: boolean },
  rowSelection: {},
  columnFilters: {}
) => {
  return (
    await axiosInstance.get<WebResponse<ScheduleDTOList>>(
      `schedule/all?page=${pagination.pageIndex + 1}&page_size=${
        pagination.pageSize
      }&sort_order=${sort.desc ? "DESC" : "ASC"}&sort_by=${getShotBy(sort.id)}`
    )
  ).data;
};
