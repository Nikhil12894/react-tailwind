import { Button } from "@/components/ui/button";
import { useSorting } from "@/components/ui/data-table-lazy/data-table-lazy";
import { Loader } from "@/components/ui/loader";
import { usePostQuery } from "@/service/queries";
import { PaginationState } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogFooter from "./Blog_footer";
import BlogNewsLater from "./Blog_news_later";
import { CreatePostForm } from "./Create_post";
import useAuthStore from "@/hooks/use-login-store";
import { Post } from "@/types/posst-type";
import { postDefaultData } from "./blog_data";

const AllBlogs = () => {
  const [newPost, setNewPost] = useState(false);
  const isAuthenticated = useAuthStore((stat) => stat.isAuthenticated);
  const [allPost, setAllPost] = useState<Post[]>([]);
  const [pagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { field, order } = useSorting("title", "DESC");
  const dataQuery = usePostQuery(pagination, {
    id: field,
    desc: order === "DESC",
  });
  useEffect(() => {
    setAllPost(dataQuery.data?.data?.postDTOs ?? postDefaultData);
  }, []);
  return (
    <div className="grid grid-cols-4 grid-rows-1">
      <div className="col-span-4 md:col-span-3 border container">
        {isAuthenticated && (
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
        )}
        {newPost ? (
          <CreatePostForm />
        ) : (
          <section>
            {dataQuery.isLoading ? (
              <Loader />
            ) : allPost.length == 0 ? (
              <div className="h-screen flex items-center justify-center">
                <div className="text-5xl">
                  No Post available will be available soon...
                </div>
              </div>
            ) : (
              allPost.map((post) => (
                <div key={post.id} className="md:container m-4">
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
              ))
            )}
          </section>
        )}
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
