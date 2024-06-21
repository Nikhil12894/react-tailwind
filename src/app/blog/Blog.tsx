import { Post } from "@/types/posst-type";
import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BlogFooter from "./Blog_footer";
import BlogNewsLater from "./Blog_news_later";
import RelatedBlog from "./Related_Blog";
import { postDefaultData } from "./blog_data";

const Blog = () => {
  const location = useLocation();
  const { pathname } = location;

  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const title = pathname.split("/")[2].replaceAll("%20", " ");
    console.log(title);
    const currentPost: Post[] = postDefaultData.filter(
      (post) => post.title === title
    );
    console.log(currentPost);
    fetch(`${currentPost[0].content}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((text) => setContent(text))
      .catch((error) => console.error("Error fetching the file:", error));
  }, [content]);
  return (
    <div>
      <div className="container">
        <MDEditor.Markdown source={content} />
      </div>
      <RelatedBlog />
      <BlogNewsLater />
      <BlogFooter />
    </div>
  );
};

export default Blog;
