import { useFormContext } from "react-hook-form";
import { DynamicFieldData } from "./dynamic-control-types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

export const DynamicControl = ({
  inputType,
  fieldName,
  defaultValue,
  options = [],
  config = {},
}: DynamicFieldData) => {
  const { register } = useFormContext();

  switch (inputType) {
    case "text":
    case "email":
    case "password":
    case "number":
    // case "date":
    case "time":
    case "datetime-local":
    case "color":
    case "file":
    case "range":
      return (
        <Input
          type={inputType}
          {...register(fieldName, config)}
          defaultValue={defaultValue}
          id={fieldName}
          autoComplete="off"
        />
      );
    case "select": {
      return (
        <select
          {...register(fieldName, config)}
          defaultValue={defaultValue}
          name={fieldName}
          id={fieldName}
        >
          {options.map((o, index) => (
            <option key={index} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      );
    }
    case "textarea":
      return (
        <Textarea
          {...register(fieldName, config)}
          defaultValue={defaultValue}
          name={fieldName}
          rows={2}
          id={fieldName}
          autoComplete="off"
        />
      );
    case "checkbox":
      return (
        <Checkbox
          className="mr-1"
          {...register(fieldName, config)}
          name={fieldName}
          id={fieldName}
          defaultChecked={defaultValue}
        />
      );
    case "radio":
      return (
        <div className="flex items-center" id={fieldName}>
          {options.map((o, index) => (
            <div key={index} className="flex items-center mr-2">
              <Input
                className="mr-1"
                key={index}
                type="radio"
                {...register(fieldName, config)}
                value={o.value}
                name={fieldName}
                id={o.value}
                defaultChecked={defaultValue === o.value}
              />
              <Label htmlFor={o.value}>{o.label}</Label>
            </div>
          ))}
        </div>
      );
    case "date":
      return (
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] pl-3 text-left font-normal",
                  !defaultValue && "text-muted-foreground"
                )}
              >
                {defaultValue ? (
                  format(defaultValue, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={defaultValue}
              onSelect={config.onChange}
              disabled={(date: Date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>
      );
    default:
      return <input type="text" />;
  }
};
