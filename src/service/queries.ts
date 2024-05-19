import { fetchData } from "@/app/schedule_lazy/fetchData";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { PaginationState } from "@tanstack/react-table";

export function usePersonQuery(
  pagination: PaginationState,
  sort: { id: string; desc: boolean },
  rowSelection: {},
  columnFilters: {}
) {
  return useQuery({
    queryKey: ["persona_data", pagination, sort, rowSelection, columnFilters],
    queryFn: () => fetchData(pagination, sort, rowSelection, columnFilters),
    placeholderData: keepPreviousData,
  });
}
