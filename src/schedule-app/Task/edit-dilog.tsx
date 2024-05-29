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
import { useEffect } from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Task } from "@/types/task-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Schedule } from "@/types/schedule-type";

interface EditDialogProps {
  isEditDialogOpen: boolean;
  onOpenDialogFunc: (isOpen: boolean) => void;
  submit: (values: z.infer<typeof requiredFields>) => void;
  selectedRow: Task | null;
  scheduleList: string[];
}

const schema = z.object({
  task_id: z.string().min(3).max(100).toUpperCase(),
  description: z.string().min(3).max(100),
  is_schedular_enabled: z.boolean().default(false),
  schedule: z.string().min(3),
  id: z.number().readonly(),
});

const requiredFields = schema.required({
  task_id: true,
  description: true,
  is_schedular_enabled: true,
  schedule: true,
});
type FormValues = z.infer<typeof requiredFields>;

function AddEditDialogForm({
  isEditDialogOpen,
  onOpenDialogFunc,
  selectedRow,
  submit,
  scheduleList,
}: EditDialogProps) {
  // const [isAddSchedule, setIsAddSchedule] = useState(false);
  const defaultValues: Partial<FormValues> = {
    task_id: "",
    description: "",
    is_schedular_enabled: false,
    schedule: "",
    id: 0,
  };
  const form = useForm<FormValues>({
    resolver: zodResolver(requiredFields),
    defaultValues: defaultValues,
  });

  function onSubmit(values: FormValues) {
    submit(values);
    onOpenDialogFunc(false);
  }

  useEffect(() => {
    form.setValue(
      "task_id",
      selectedRow?.task_id ? selectedRow?.task_id.toUpperCase() : ""
    );
    form.setValue(
      "description",
      selectedRow?.description ? selectedRow.description : ""
    );
    form.setValue("id", selectedRow?.id ? selectedRow?.id : 0);
    form.setValue(
      "schedule",
      selectedRow?.schedule ? selectedRow.schedule : ""
    );
    form.setValue(
      "is_schedular_enabled",
      selectedRow?.is_schedular_enabled
        ? selectedRow.is_schedular_enabled
        : false
    );
  }, [selectedRow, isEditDialogOpen]);

  return (
    <Dialog open={isEditDialogOpen} onOpenChange={onOpenDialogFunc}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {selectedRow?.id === 0 || selectedRow?.id == undefined
              ? "Add"
              : "Edit"}{" "}
            Task
          </DialogTitle>
          <DialogDescription>
            Make changes in schedule. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="task_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Task ID" {...field} />
                  </FormControl>
                  <FormDescription>This is unique Task id.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Task Description" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the task description.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="is_schedular_enabled"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Enabled</FormLabel>
                    <FormDescription>
                      Indicate if the schedule is enabled.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="schedule"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task Schedule</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Select a schedule for the task"
                          defaultValue={field.value}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {scheduleList &&
                        scheduleList.map((schedule) => (
                          <SelectItem value={schedule} key={schedule}>
                            {schedule}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>This is the task schedule.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="button" onClick={() => onOpenDialogFunc(false)}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export { AddEditDialogForm as EditDialogForm };
