import { BlogPrevCard } from "./BlogPrevCard";

const RelatedBlog = () => {
  return (
    <aside
      aria-label="Related articles"
      className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
    >
      <div className="px-4 mx-auto max-w-screen-xl">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Related articles
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <BlogPrevCard />
          <BlogPrevCard />
          <BlogPrevCard />
          <BlogPrevCard />
        </div>
      </div>
    </aside>
  );
};

export default RelatedBlog;
