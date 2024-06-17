import React from "react";
import RelatedBlog from "./Related_Blog";
import BlogNewsLater from "./Blog_news_later";
import BlogFooter from "./Blog_footer";
import SelectedBlog from "./Selected_blog";

const Blog: React.FC = () => {
  return (
    <div>
      <main className="antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"></article>
        </div>
      </main>
      <SelectedBlog />
      <RelatedBlog />
      <BlogNewsLater />
      <BlogFooter />
    </div>
  );
};

export default Blog;
