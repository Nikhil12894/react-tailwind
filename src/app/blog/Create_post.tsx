"use client";

import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

// Define schema for RegisterCircleInputClient
const RegisterCircleInputClientSchema = zod.object({
  title: zod.string().min(10, "Title is required"),
  circle_image: zod
    .custom<FileList>((val) => val instanceof FileList && val.length > 0, {
      message: "Only image files are allowed",
    })
    .refine(
      (fileList) => fileList[0].type.startsWith("image/"),
      "Only image files are allowed"
    ), // Assuming the circle image is a URL or file path
  content: zod.string().min(10, "Content is required"),
  // Add more fields as needed
});

type RegisterCircleInputClient = zod.infer<
  typeof RegisterCircleInputClientSchema
>;

// Define schema for registerCircleSchemaClient
const registerCircleSchemaClient = RegisterCircleInputClientSchema;

export type { RegisterCircleInputClient, registerCircleSchemaClient };

function getImageData(event: ChangeEvent<HTMLInputElement>) {
  // FileList is immutable, so we need to create a new one
  const dataTransfer = new DataTransfer();

  // Add newly uploaded images
  Array.from(event.target.files!).forEach((image) =>
    dataTransfer.items.add(image)
  );

  const files = dataTransfer.files;
  const displayUrl = URL.createObjectURL(event.target.files![0]);

  return { files, displayUrl };
}

export function RegisterForm() {
  const [preview, setPreview] = useState("");
  const form = useForm<RegisterCircleInputClient>({
    mode: "onSubmit",
    resolver: zodResolver(registerCircleSchemaClient),
    defaultValues: {
      circle_image: undefined,
      title: "",
      content: "",
    },
  });

  function submitCircleRegistration(value: RegisterCircleInputClient) {
    console.log({ ...value });
  }

  return (
    <>
      <Form {...form}>
        <form
          className="space-y-8"
          onSubmit={form.handleSubmit(submitCircleRegistration)}
        >
          <Avatar className="w-24 h-24">
            <AvatarImage src={preview} />
            <AvatarFallback>BU</AvatarFallback>
          </Avatar>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="title ..." {...field} />
                </FormControl>
                <FormDescription>
                  This is the title of your post.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="circle_image"
            render={({ field: { onChange, value, ...rest } }) => (
              <>
                <FormItem>
                  <FormLabel>Circle Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      {...rest}
                      onChange={(event) => {
                        const { displayUrl } = getImageData(event);
                        setPreview(displayUrl);
                        onChange(event.target.files);
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Choose best image that bring spirits to your circle.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Input placeholder="content ..." {...field} />
                </FormControl>
                <FormDescription>
                  This is the content of your post.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Register</Button>
        </form>
      </Form>
    </>
  );
}
