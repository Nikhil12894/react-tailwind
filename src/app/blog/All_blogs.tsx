import { ColumnDefFun } from "@/components/ui/data-table-client/data-table-column-def";
import {
  useLazyTable,
  useSorting,
} from "@/components/ui/data-table-lazy/data-table-lazy";
import { DataTableLazyPagination } from "@/components/ui/data-table-lazy/data-table-lazy-pagination";
import { Loader } from "@/components/ui/loader";
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
import BlogTableCard from "./blog_card";
import { postDefaultData, postTableColumns } from "./blog_data";
import BlogFooter from "./Blog_footer";
import BlogNewsLater from "./Blog_news_later";

const AllBlogs = () => {
  const [allPost, setAllPost] = useState<Post[]>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
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
      <div className="col-span-4 md:col-span-3 border">
        {dataQuery.isLoading ? (
          <Loader />
        ) : allPost.length == 0 ? (
          <div className="h-screen flex items-center justify-center">
            <div className="text-5xl">
              No Post available will be available soon...
            </div>
          </div>
        ) : (
          <div className="m-2">
            <ScrollArea className="h-screen p-4">
              <div className="grid grid-cols-6 gap-4">
                {/* {allPost.map((post) => (
              <div key={post.id} className="m-5 col-span-2 md:col-span-1">
                <div className="items-center mt-5 border rounded-lg duration-300 hover:scale-105">
                  <div className="m-5">
                    <Link to={`/post/${post.title}`}>
                      <article className="flex flex-col">
                        <img
                          src={post.featured_image}
                          className="mb-5 h-[10rem] w-full rounded-lg"
                          alt={post.title}
                        />
                        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                          {post.title}
                        </h2>
                        <p className="mb-4 text-gray-500 dark:text-gray-400">
                          {post.description}
                        </p>
                      </article>
                    </Link>
                  </div>
                </div>
              </div>
            ))} */}
                <div className="col-start-2 col-span-4">
                  <BlogTableCard
                    table={table}
                    isLoading={dataQuery.isFetching}
                  />
                </div>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        )}
        <DataTableLazyPagination table={table} hideSelectedCount={true} />
      </div>
      <div className="border md:col-span-1 hidden md:block">ADS</div>
      <div className="col-span-4 border">
        <BlogNewsLater />
        <BlogFooter />
      </div>
    </div>
  );
};

export default AllBlogs;
