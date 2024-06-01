import { DynamicFieldData } from "./dynamic-control-types";

export const fields: DynamicFieldData[] = [
  {
    fieldName: "name",
    inputType: "text",
    label: "Name",
    defaultValue: "",
  },
  {
    fieldName: "age",
    inputType: "number",
    label: "Age",
    defaultValue: 18,
  },
  {
    fieldName: "language",
    inputType: "select",
    label: "Language",
    options: [
      { value: "english", label: "English" },
      { value: "french", label: "French" },
    ],
    defaultValue: "english",
  },
  {
    fieldName: "address",
    inputType: "textarea",
    label: "Address",
    defaultValue: "",
  },
  {
    fieldName: "dob",
    inputType: "date",
    label: "DOB",
    defaultValue: "2020-01-01",
  },
  {
    fieldName: "time",
    inputType: "time",
    label: "Time",
    defaultValue: "12:00",
  },
  {
    fieldName: "email",
    inputType: "email",
    label: "Email",
    defaultValue: "test@test.com",
  },
  {
    fieldName: "password",
    inputType: "password",
    label: "Password",
    defaultValue: "password",
  },
  {
    fieldName: "color",
    inputType: "color",
    label: "Color",
    defaultValue: "red",
  },
  {
    fieldName: "gender",
    inputType: "radio",
    label: "Gender",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" },
    ],
    defaultValue: "male",
  },
  {
    fieldName: "isMarried",
    inputType: "checkbox",
    label: "Is Married",
    defaultValue: false,
  },
  {
    fieldName: "date-time",
    inputType: "datetime-local",
    label: "Date Time",
    defaultValue: "2024-05-31T21:00",
  },
  {
    fieldName: "file",
    inputType: "file",
    label: "File",
    defaultValue: "",
  },
  {
    fieldName: "range",
    inputType: "range",
    label: "Range",
    defaultValue: "",
  },
];

// formConfig.ts
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.number().min(18, "You must be at least 18"),
  email: z.string().email("Invalid email address"),
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Please select a gender" }),
  }),
  interests: z.array(z.string()).nonempty("At least one interest is required"),
  subscribe: z.boolean().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;

export type FieldConfig = {
  name: keyof FormSchema;
  label: string;
  type: string;
  options?: { label: string; value: string }[]; // for select, radio, checkbox
};

export const formConfig: FieldConfig[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
  },
  {
    name: "age",
    label: "Age",
    type: "number",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "gender",
    label: "Gender",
    type: "radio",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" },
    ],
  },
  {
    name: "interests",
    label: "Interests",
    type: "checkbox",
    options: [
      { label: "Sports", value: "sports" },
      { label: "Music", value: "music" },
      { label: "Movies", value: "movies" },
    ],
  },
  {
    name: "subscribe",
    label: "Subscribe to newsletter",
    type: "checkbox",
  },
];
