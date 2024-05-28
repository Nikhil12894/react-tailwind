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
import { Schedule } from "../../types/schedule-type";
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
import { ReCron } from "@/components/cron";
import { Type } from "@sbzen/cron-core";

const tabs = [Type.SECONDS, Type.MINUTES, Type.HOURS, Type.DAY, Type.MONTH];

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
      <DialogContent className="h-3/4 m-4 p-4">
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
          <div className="overflow-x-hidden overflow-y-hidden hover:overflow-x-auto hover:overflow-y-auto m-2">
            <form className="space-y-8 m-1 shadow shadow-slate-400 rounded">
              <FormField
                control={form.control}
                name="schedule_id"
                render={({ field }) => (
                  <FormItem className="m-2">
                    <FormLabel>Schedule ID</FormLabel>
                    <FormControl>
                      <Input placeholder="schedule ID" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is unique schedule id.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cron_schedule"
                render={({ field }) => (
                  <FormItem className="m-2">
                    <FormLabel>Cron Expiration</FormLabel>
                    <FormControl className="disabled">
                      <Input
                        placeholder="cron expiration"
                        {...field}
                        disabled={true}
                      />
                    </FormControl>
                    <FormDescription>
                      This is the cron expiration.
                    </FormDescription>
                    <FormMessage />
                    <ReCron
                      tabs={tabs}
                      value={field.value}
                      onChange={(cron) =>
                        form.setValue(
                          "cron_schedule",
                          cron.slice(0, cron.length - 2)
                        )
                      }
                    />
                  </FormItem>
                )}
              />
            </form>
          </div>
        </Form>
        <DialogFooter>
          <Button type="button" onClick={() => onOpenDialogFunc(false)}>
            Cancel
          </Button>
          <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { AddEditDialogForm as EditDialogForm };
