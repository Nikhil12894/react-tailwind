import { Button } from "@/components/ui/button";
import { useSorting } from "@/components/ui/data-table-lazy/data-table-lazy";
import { Loader } from "@/components/ui/loader";
import { usePostQuery } from "@/service/queries";
import { PaginationState } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BlogFooter from "./Blog_footer";
import BlogNewsLater from "./Blog_news_later";
import { CreatePostForm } from "./Create_post";

const AllBlogs = () => {
  const [newPost, setNewPost] = useState(false);
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
        <Button
          variant="outline"
          className="float-right m-5"
          onClick={() => setNewPost(!newPost)}
        >
          {newPost ? (
            "Cancel"
          ) : (
            <>
              <Plus className="mr-2" />
              New Post
            </>
          )}
        </Button>
        {newPost ? (
          <CreatePostForm />
        ) : (
          <section>
            {dataQuery.isLoading ? (
              <Loader />
            ) : (
              dataQuery.data?.data?.postDTOs?.map((post) => (
                <Link
                  to={`/post/${post.id}`}
                  key={post.id}
                  className="flex items-center justify-items-center w-64 mr-20"
                >
                  <article className="flex flex-col">
                    <img
                      src={post.featured_image}
                      className="mb-5  w-[32rem] h-[15rem]"
                      alt="Image 1"
                    />
                    <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                      {post.title}
                    </h2>
                    <p className="mb-4 text-gray-500 dark:text-gray-400">
                      {post.description}
                    </p>
                    {/* <p className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                      Read in 2 minutes
                    </p> */}
                  </article>
                </Link>
              ))
            )}
          </section>
        )}
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
