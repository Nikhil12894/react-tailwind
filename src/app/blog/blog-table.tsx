import { ColumnConfig } from "@/components/ui/data-table-client/data-table-column-def";
import { Post } from "@/types/posst-type";
import { RowAction } from "@/types/row-action";
import { Table } from "@tanstack/react-table";
import PostCard from "./PostCard";

interface PostDataCardProps {
  table: Table<Post>;
  isLoading?: boolean;
  className?: string;
  columns?: ColumnConfig[];
  rowActions?: RowAction<Post>[];
}
const BlogTable = ({ table }: PostDataCardProps) => {
  return table
    .getRowModel()
    .rows.map((row) => <PostCard key={row.id} blogContent={row.original} />);
};

export default BlogTable;
