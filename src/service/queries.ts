import { fetchData } from "@/app/person/fetchData";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { PaginationState } from "@tanstack/react-table";
import { getAllSchedules } from "./api";

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
