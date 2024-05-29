import { EditIcon, Trash2 } from "lucide-react";
import { ElementType } from "react";

export interface RowAction<T> {
  label?: string;
  action: (data: T) => void;
  icon?: ElementType;
}

export function defaultRowAction<T>(
  onEdit: (data: T) => void,
  onDelete: (data: T) => void
): RowAction<T>[] {
  return [
    {
      action: onEdit,
      icon: () => {
        return <EditIcon className="h-4 w-4 text-blue-500" />;
      },
    },
    {
      action: onDelete,
      icon: () => {
        return <Trash2 className="h-4 w-4 text-red-500" />;
      },
    },
  ];
}
