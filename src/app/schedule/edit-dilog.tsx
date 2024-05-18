import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Schedule } from "../schedule-type";

// export interface EditableDeletableTableProps<T> {
//   tableData: T[];
// }
// export function EditableDeletableTable<T>({
//   tableData,
// }: EditableDeletableTableProps<T>) {
//   const [data, setData] = useState(tableData);
//   const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
//   const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
//   const [editRow, setEditRow] = useState(null);
//   const [editForm, setEditForm] = useState<any>({});
//   const [deleteRowId, setDeleteRowId] = useState(null);

//   const handleEditClick = (row: any) => {
//     setEditRow(row);
//     setEditForm(row.original);
//     setIsEditDialogOpen(true);
//   };

//   const handleDeleteClick = (id: any) => {
//     setDeleteRowId(id);
//     setIsDeleteDialogOpen(true);
//   };

//   const handleInputChange = (e: any) => {
//     const { name, value } = e.target;
//     setEditForm({ ...editForm, [name]: value });
//   };

//   const handleSave = () => {
//     const newData = data.map((row: any) =>
//       row.id === editForm.id ? editForm : row
//     );
//     setData(newData);
//     setIsEditDialogOpen(false);
//   };

//   const handleDelete = () => {
//     const newData = data.filter((row: any) => row.id !== deleteRowId);
//     setData(newData);
//     setIsDeleteDialogOpen(false);
//   };

//   return (
//     <div>
//       <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
//         <DialogContent>
//           <DialogHeader>Delete Row</DialogHeader>
//           <DialogContent>
//             Are you sure you want to delete this row?
//           </DialogContent>
//           <DialogFooter>
//             <Button onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
//             <Button onClick={handleDelete}>Delete</Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
export interface EditDialogProps {
  isEditDialogOpen: boolean;
  onOpenDialogFunc: (isOpen: boolean) => void;
  selectedRow: Schedule | null;
}

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const cronRegex: RegExp =
  /^\s*($|#|\w+\s*=|(\?|\*|(?:[0-5]?\d)(?:(?:-|\/|\,)(?:[0-5]?\d))?(?:,(?:[0-5]?\d)(?:(?:-|\/|\,)(?:[0-5]?\d))?)*)\s+(\?|\*|(?:[0-5]?\d)(?:(?:-|\/|\,)(?:[0-5]?\d))?(?:,(?:[0-5]?\d)(?:(?:-|\/|\,)(?:[0-5]?\d))?)*)\s+(\?|\*|(?:[01]?\d|2[0-3])(?:(?:-|\/|\,)(?:[01]?\d|2[0-3]))?(?:,(?:[01]?\d|2[0-3])(?:(?:-|\/|\,)(?:[01]?\d|2[0-3]))?)*)\s+(\?|\*|(?:0?[1-9]|[12]\d|3[01])(?:(?:-|\/|\,)(?:0?[1-9]|[12]\d|3[01]))?(?:,(?:0?[1-9]|[12]\d|3[01])(?:(?:-|\/|\,)(?:0?[1-9]|[12]\d|3[01]))?)*)\s+(\?|\*|(?:[1-9]|1[012])(?:(?:-|\/|\,)(?:[1-9]|1[012]))?(?:L|W)?(?:,(?:[1-9]|1[012])(?:(?:-|\/|\,)(?:[1-9]|1[012]))?(?:L|W)?)*|\?|\*|(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)(?:(?:-)(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC))?(?:,(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)(?:(?:-)(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC))?)*)\s+(\?|\*|(?:[0-6])(?:(?:-|\/|\,|#)(?:[0-6]))?(?:L)?(?:,(?:[0-6])(?:(?:-|\/|\,|#)(?:[0-6]))?(?:L)?)*|\?|\*|(?:MON|TUE|WED|THU|FRI|SAT|SUN)(?:(?:-)(?:MON|TUE|WED|THU|FRI|SAT|SUN))?(?:,(?:MON|TUE|WED|THU|FRI|SAT|SUN)(?:(?:-)(?:MON|TUE|WED|THU|FRI|SAT|SUN))?)*)(|\s)+(\?|\*|(?:|\d{4})(?:(?:-|\/|\,)(?:|\d{4}))?(?:,(?:|\d{4})(?:(?:-|\/|\,)(?:|\d{4}))?)*))$/;
const scheduleFormSchema = z.object({
  schedule_id: z.string().min(2).max(100).toUpperCase(),
  cron_schedule: z.string().regex(cronRegex).readonly(),
});

const requiredFields = scheduleFormSchema.required({
  schedule_id: true,
  cron_schedule: true,
});

export function EditDialogForm({
  isEditDialogOpen,
  onOpenDialogFunc,
  selectedRow,
}: EditDialogProps) {
  const [data, setData] = useState<Schedule | null>(selectedRow);
  // 1. Define your form.
  const form = useForm<z.infer<typeof requiredFields>>({
    defaultValues: data
      ? {
          schedule_id: data?.schedule_id,
          cron_schedule: data?.cron_schedule,
        }
      : undefined,
    resolver: zodResolver(requiredFields),
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof requiredFields>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setData((prev) => ({ ...prev, ...values }));
    onOpenDialogFunc(false);
    // console.log(values);
  }

  // useEffect(() => {
  //   form.setValue("schedule_id", data?.schedule_id);
  //   form.setValue("cron_schedule", data?.cron_schedule);
  // }, [selectedRow]);

  return (
    <Dialog open={isEditDialogOpen} onOpenChange={onOpenDialogFunc}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Schedule</DialogTitle>
          <DialogDescription>
            Make changes in schedule. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="schedule_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Schedule ID</FormLabel>
                  <FormControl>
                    <Input placeholder="schedule ID" {...field} />
                  </FormControl>
                  <FormDescription>This is unique schedule id.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cron_schedule"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cron Expiration</FormLabel>
                  <FormControl>
                    <Input placeholder="cron expiration" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the cron expiration.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button onClick={() => onOpenDialogFunc(false)}>Cancel</Button>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
