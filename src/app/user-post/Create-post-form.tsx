"use client";

import { useForm } from "react-hook-form";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import { useCreatePost } from "@/service/mutation";
import { PostStatus } from "@/types/posst-type";
import { toBase64 } from "@/utils/fileToBase64";
import { zodResolver } from "@hookform/resolvers/zod";
import MDEditor from "@uiw/react-md-editor";
import { ChangeEvent, useState } from "react";
import rehypeSanitize from "rehype-sanitize";
import * as zod from "zod";

// Define schema for RegisterCircleInputClient
const RegisterCircleInputClientSchema = zod.object({
  title: zod.string().min(10, "Title is required"),
  description: zod
    .string()
    .min(100, "Description is required")
    .max(300, "Max 300 characters"),
  featuredImage: zod
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

export function CreatePostForm() {
  const [preview, setPreview] = useState("");
  const form = useForm<RegisterCircleInputClient>({
    mode: "onSubmit",
    resolver: zodResolver(registerCircleSchemaClient),
    defaultValues: {
      featuredImage: undefined,
      title: "",
      content: "",
      description: "",
    },
  });
  const createPostMutation = useCreatePost();
  function submitCircleRegistration(value: RegisterCircleInputClient) {
    console.log({ ...value });

    toBase64(value.featuredImage[0]).then((base64) => {
      createPostMutation.mutate({
        title: value.title,
        content: value.content,
        featured_image: base64,
        status: PostStatus.draft,
      });
    });
  }

  return (
    <div className="container mx-auto">
      <Form {...form}>
        <form
          className="space-y-8 items-center justify-center"
          onSubmit={form.handleSubmit(submitCircleRegistration)}
        >
          <div className="flex items-center justify-center w-full">
            <Avatar className="w-24 h-24">
              <AvatarImage src={preview} />
              <AvatarFallback>BU</AvatarFallback>
            </Avatar>
            <FormField
              control={form.control}
              name="featuredImage"
              render={({ field: { onChange, value, ...rest } }) => (
                <>
                  <FormItem>
                    <FormLabel>Circle Image</FormLabel>
                    <FormControl className="hover:bg-slate-300 cursor-pointer">
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
          </div>

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
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Description ..." {...field} />
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
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <MDEditor
                    className="bg-white text-gray-950 dark:bg-slate-900 dark:text-white"
                    value={field.value}
                    onChange={field.onChange}
                    height={500}
                    previewOptions={{
                      rehypePlugins: [[rehypeSanitize]],
                    }}
                  />
                </FormControl>
                <FormDescription>
                  This is the content of your post.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="">
            Register
          </Button>
        </form>
      </Form>

      {/* <MDEditor.Markdown source={form.getValues("content")} /> */}
    </div>
  );
}
