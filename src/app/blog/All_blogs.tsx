import { useSorting } from "@/components/ui/data-table-lazy/data-table-lazy";
import { Loader } from "@/components/ui/loader";
import { usePostQuery } from "@/service/queries";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { Link } from "react-router-dom";
import BlogFooter from "./Blog_footer";
import BlogNewsLater from "./Blog_news_later";

const AllBlogs = () => {
  const [pagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { field, order } = useSorting("title", "DESC");
  const dataQuery = usePostQuery(pagination, {
    id: field,
    desc: order === "DESC",
  });

  return (
    <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-3">
      <div className="col-span-3 border container">
        <section>
          {dataQuery.isLoading ? (
            <Loader />
          ) : (
            dataQuery.data?.data?.postDTOs?.map((post) => (
              <Link to="/blogs/blog-1">
                <article className="flex flex-col">
                  <img
                    src={post.featuredImage}
                    className="mb-5  w-full h-[32rem]"
                    alt="Image 1"
                  />
                  <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="mb-4 text-gray-500 dark:text-gray-400">
                    {post.content}
                  </p>
                  <p className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                    Read in 2 minutes
                  </p>
                </article>
              </Link>
            ))
          )}
        </section>
      </div>
      <div className="col-span-1 border">ADS</div>
      <div className="col-span-4 border">
        <BlogNewsLater />
        <BlogFooter />
      </div>
    </div>
  );
};

export default AllBlogs;
