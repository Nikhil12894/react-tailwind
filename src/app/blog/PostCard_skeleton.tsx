import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const PostCardSkeleton = () => {
  return (
    <div className="mx-auto rounded-md shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:shrink-0">
          <Skeleton className="h-48 w-full object-cover md:h-full md:w-48" />
        </div>
        <div className="p-8 w-full">
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-64" />
            <Skeleton className="h-6 w-14" />
          </div>
          <Skeleton className="block mt-1 w-[80%] h-6" />
          <Skeleton className="mt-2 w-[100%] h-14 text-slate-500" />
          <div className="flex flex-col-reverse justify-between mt-2 lg:flex-row">
            <div className="flex gap-1">
              <Skeleton className="h-12 w-12 rounded-full" />

              <div className="flex flex-col text-gray-600 dark:text-gray-300 text-sm">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-6 w-32 mt-1" />
              </div>
            </div>

            <Skeleton className="h-6 w-32 mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

const PostCardSkeletonGroup = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-start-2 col-span-4">
        <PostCardSkeleton />
        <Separator className="my-2" />
        <PostCardSkeleton />
        <Separator className="my-2" />
        <PostCardSkeleton />
        <Separator className="my-2" />
        <PostCardSkeleton />
        <Separator className="my-2" />
        <PostCardSkeleton />
        <Separator className="my-2" />
        <PostCardSkeleton />
      </div>
    </div>
  );
};

export default PostCardSkeletonGroup;
