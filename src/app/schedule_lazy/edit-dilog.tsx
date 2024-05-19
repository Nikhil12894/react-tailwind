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
import { Schedule } from "../schedule-type";

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

interface EditDialogProps {
  isEditDialogOpen: boolean;
  onOpenDialogFunc: (isOpen: boolean) => void;
  submit: (values: z.infer<typeof requiredFields>) => void;
  selectedRow: Schedule | null;
}

const schema = z.object({
  schedule_id: z.string().min(3).max(100).toUpperCase(),
  cron_schedule: z.string().readonly(),
  id: z.number().readonly(),
});

const requiredFields = schema.required({
  schedule_id: true,
  cron_schedule: true,
});
type FormValues = z.infer<typeof requiredFields>;

function AddEditDialogForm({
  isEditDialogOpen,
  onOpenDialogFunc,
  selectedRow,
  submit,
}: EditDialogProps) {
  const defaultValues: Partial<FormValues> = {
    schedule_id: "",
    cron_schedule: "",
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
      "schedule_id",
      selectedRow?.schedule_id ? selectedRow?.schedule_id.toUpperCase() : ""
    );
    form.setValue(
      "cron_schedule",
      selectedRow?.cron_schedule ? selectedRow.cron_schedule : ""
    );
    form.setValue("id", selectedRow?.id ? selectedRow?.id : 0);
  }, [selectedRow, isEditDialogOpen]);

  return (
    <Dialog open={isEditDialogOpen} onOpenChange={onOpenDialogFunc}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {selectedRow?.id === 0 || selectedRow?.id == undefined
              ? "Add"
              : "Edit"}{" "}
            Schedule
          </DialogTitle>
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
