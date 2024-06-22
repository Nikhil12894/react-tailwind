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
  const [imageSrc, setImageSrc] = useState<string>();
  useEffect(() => {
    const title = pathname.split("/")[2].replaceAll("%20", " ");
    const currentPost: Post[] = postDefaultData.filter(
      (post) => post.title === title
    );
    setImageSrc(currentPost[0].featured_image);
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
      <div className="m-2 md:container">
        <img src={imageSrc} className="mb-5 h-[15rem] w-full" alt="Image 1" />
        <MDEditor.Markdown source={content} className="mb-5 mt-5 ml-0 mr-0" />
      </div>
      <RelatedBlog />
      <BlogNewsLater />
      <BlogFooter />
    </div>
  );
};

export default Blog;
