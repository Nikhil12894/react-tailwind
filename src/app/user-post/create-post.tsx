import { Button } from "@/components/ui/button";
import useAuthStore from "@/hooks/use-login-store";
import { Plus } from "lucide-react";
import { useState } from "react";
import { CreatePostForm } from "./Create-post-form";

const CreatePost = () => {
  const [newPost, setNewPost] = useState(false);
  const isAuthenticated = useAuthStore((stat) => stat.isAuthenticated);
  return (
    <div>
      {isAuthenticated && (
        <Button
          variant="outline"
          className="float-right m-4"
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
      {newPost ? <CreatePostForm /> : <></>}
    </div>
  );
};

export default CreatePost;
