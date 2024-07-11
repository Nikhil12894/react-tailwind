import { ColumnDefFun } from "@/components/ui/data-table-client/data-table-column-def";
import {
  useLazyTable,
  useSorting,
} from "@/components/ui/data-table-lazy/data-table-lazy";
import { DataTableLazyPagination } from "@/components/ui/data-table-lazy/data-table-lazy-pagination";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { usePostQuery } from "@/service/queries";
import { Post } from "@/types/posst-type";
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  VisibilityState,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import BlogTable from "./blog-table";
import { postDefaultData, postTableColumns } from "./blog_data";
import BlogFooter from "./Blog_footer";
import BlogNewsLater from "./Blog_news_later";
import PostCardSkeletonGroup from "./PostCard_skeleton";
import { CarouselSpacing } from "./tagScroll";

const AllBlogs = () => {
  const [allPost, setAllPost] = useState<Post[]>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });
  const { sorting, onSortingChange, field, order } = useSorting(
    "title",
    "DESC"
  );
  const [rowSelection, setRowSelection] = useState({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const dataQuery = usePostQuery(pagination, {
    id: field,
    desc: order === "DESC",
  });

  const columns: ColumnDef<Post>[] = useMemo(
    () =>
      ColumnDefFun<Post>({
        columnList: postTableColumns,
      }),
    []
  );

  useEffect(() => {
    setAllPost(dataQuery.data?.data?.postDTOs ?? postDefaultData);
  }, []);

  const table = useLazyTable<Post, any>({
    data: dataQuery.data?.data.postDTOs ?? postDefaultData,
    rowCount: dataQuery.data?.data.total ?? postDefaultData.length,
    columns,
    pagination,
    sorting,
    rowSelection,
    columnFilters,
    columnVisibility,
    onSortingChange,
    onPaginationChange: setPagination,
    setRowSelection,
    setColumnFilters,
    setColumnVisibility,
    idKey: "id",
  });

  return (
    <div className="grid grid-cols-4 grid-rows-1">
      <div className="col-span-4 xl:col-span-3 border">
        {dataQuery.isLoading ? (
          <PostCardSkeletonGroup />
        ) : allPost.length == 0 ? (
          <div className="h-screen flex items-center justify-center">
            <div className="text-5xl">
              No Post available will be available soon...
            </div>
          </div>
        ) : (
          <div className="m-2">
            <div className="grid grid-cols-6 gap-4">
              <div className="xl:col-start-2 xl:col-span-4 col-start-1 col-span-6">
                <div className="mx-auto">
                  <CarouselSpacing />
                </div>
              </div>
            </div>
            <ScrollArea className="h-screen p-4">
              <div className="grid grid-cols-6 gap-4">
                <div className="xl:col-start-2 xl:col-span-4 col-start-1 col-span-6">
                  <BlogTable table={table} />
                </div>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        )}
        <DataTableLazyPagination table={table} hideSelectedCount={true} />
      </div>
      <div className="border xl:col-span-1 hidden xl:block">ADS</div>
      <div className="col-span-4 border">
        <BlogNewsLater />
        <BlogFooter />
      </div>
    </div>
  );
};

export default AllBlogs;
