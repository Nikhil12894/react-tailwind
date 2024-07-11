import { Skeleton } from "@/components/ui/skeleton";

const AllBlogsSkeleton = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-1">
      <Skeleton className="col-span-4 md:col-span-3 border" />
      {/* <PostCardSkeletonGroup />
      </div> */}
      <Skeleton className="border md:col-span-1 hidden md:block" />
      <div className="col-span-4 border">
        <Skeleton className="w-full h-96" />
        <Skeleton className="w-full h-96" />
      </div>
    </div>
  );
};

export default AllBlogsSkeleton;
