import { fetchData } from "@/app/person/fetchData";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { PaginationState } from "@tanstack/react-table";
import {
  getAllPosts,
  getAllSchedules,
  getAllSchedulesIDs,
  getAllTasks,
} from "./api";

export function usePersonQuery(
  pagination: PaginationState,
  sort: { id: string; desc: boolean },
  rowSelection: {},
  columnFilters: {}
) {
  return useQuery({
    queryKey: ["persona_data", pagination, sort, columnFilters],
    queryFn: () => fetchData(pagination, sort, rowSelection, columnFilters),
    placeholderData: keepPreviousData,
  });
}

export function useScheduleQuery(
  pagination: PaginationState,
  sort: { id: string; desc: boolean },
  rowSelection: {},
  columnFilters: {}
) {
  return useQuery({
    queryKey: ["schedule_data", pagination, sort, columnFilters],
    queryFn: () =>
      getAllSchedules(pagination, sort, rowSelection, columnFilters),
    placeholderData: keepPreviousData,
  });
}

export function useScheduleIDsQuery() {
  return useQuery({
    queryKey: ["schedule_IDs"],
    queryFn: () => getAllSchedulesIDs(),
    placeholderData: keepPreviousData,
  });
}

export function useTaskQuery(
  pagination: PaginationState,
  sort: { id: string; desc: boolean },
  rowSelection: {},
  columnFilters: {}
) {
  return useQuery({
    queryKey: ["task_data", pagination, sort, columnFilters],
    queryFn: () => getAllTasks(pagination, sort, rowSelection, columnFilters),
    placeholderData: keepPreviousData,
  });
}

// Post query

export function usePostQuery(
  pagination: PaginationState,
  sort: { id: string; desc: boolean }
) {
  return useQuery({
    queryKey: ["post_data", pagination, sort],
    queryFn: () => getAllPosts(pagination, sort),
    placeholderData: keepPreviousData,
  });
}
