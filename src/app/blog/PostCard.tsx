import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookmarkPlus, Eye, Heart, MonitorSmartphone } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Post } from "@/types/posst-type";
import { Separator } from "@/components/ui/separator";

const PostCard = ({ blogContent }: { blogContent: Post }) => {
  return (
    <>
      <div className="mx-auto rounded-md shadow-md overflow-hidden dark:bg-slate-800 bg-slate-50">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={blogContent.image_url}
            />
          </div>
          <div className="p-8">
            <div className="flex items-center justify-between">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Company retreats
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <span className=" text-gray-600 dark:text-gray-400 ">
                      <span className="flex items-center gap-1 cursor-pointer opacity-50">
                        <Heart className="w-4 h-4" />
                        <span className="hidden md:block text-muted-foreground">
                          Favorite
                        </span>
                      </span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to Favorite</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium hover:underline"
            >
              {blogContent.title}
            </a>
            <p className="mt-2 text-slate-500">{blogContent.description}</p>

            <div className="flex flex-col-reverse justify-between mt-2 lg:flex-row">
              <div className="flex gap-1">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <p className="flex flex-col text-gray-600 dark:text-gray-300 text-sm">
                  <small>Author</small>
                  <a href="https://tailwindflex.com/@simon-scheffer">
                    Simon Scheffer Aug 8 2023
                  </a>
                </p>
              </div>

              <div className="flex items-center gap-2 mt-4 mb-4 dark:text-gray-300 lg:mb-0">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="flex items-center gap-1 px-2 py-1 text-xs text-gray-700 rounded bg-gray-300/50 dark:bg-gray-700/50 dark:text-gray-300">
                        <BookmarkPlus className="w-4 h-4" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>save</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="flex items-center gap-1 px-2 py-1 text-xs text-gray-700 rounded bg-gray-300/50 dark:bg-gray-700/50 dark:text-gray-300">
                        <MonitorSmartphone className="w-4 h-4" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>component is responsive</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="flex items-center gap-1 px-2 py-1 text-xs text-gray-700 rounded bg-gray-300/50 dark:bg-gray-700/50 dark:text-gray-300">
                        <Eye className="w-4 h-4" />
                        <span>8.3k</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>total views</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="flex items-center gap-1 px-2 py-1 text-xs text-gray-700 rounded bg-gray-300/50 dark:bg-gray-700/50 dark:text-gray-300">
                        <Heart className="w-4 h-4" />
                        <span>9</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>total favorites</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-2" />
    </>
  );
};

export default PostCard;
