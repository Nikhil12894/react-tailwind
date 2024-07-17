import { useState } from "react";
import { Editor } from "@tiptap/react";
import { Button } from "../ui/button";
import { ImageIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import * as zod from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleUpload } from "./FileUpload";
import { cn } from "../../lib/utils";

interface IAddImage {
  editor: Editor;
  className?: string;
}

const AddImage = ({ editor, className }: IAddImage) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  if (!editor) {
    return <></>;
  }

  const uploadImage = (src: string) => {
    // all upload logic goes here.
    editor.commands.insertContent({
      type: "image",
      attrs: {
        src: src,
      },
    });
    editor.chain().focus().run();
  };

  return (
    <>
      <Button
        variant={"ghost"}
        onClick={() => setIsEditDialogOpen(true)}
        className="add-image-btn"
      >
        <ImageIcon className="h-4 w-4" />
      </Button>

      <ImageUploadDialog
        isEditDialogOpen={isEditDialogOpen}
        onOpenDialogFunc={(value) => {
          setIsEditDialogOpen(value);
        }}
        submit={(e) => uploadImage(e.src)}
        className={className}
      />
    </>
  );
};

// Define schema for RegisterCircleInputClient
const ImageSchema = zod.object({
  src: zod.string().min(1, "Image URL is required"),
  file: zod
    .custom<FileList>((val) => val instanceof FileList && val.length > 0, {
      message: "Only image files are allowed",
    })
    .refine(
      (fileList) => fileList[0].type.startsWith("image/"),
      "Only image files are allowed"
    )
    .optional(),
});

type ImageSchemaType = zod.infer<typeof ImageSchema>;

interface DialogProps {
  isEditDialogOpen: boolean;
  onOpenDialogFunc: (isOpen: boolean) => void;
  submit: (values: zod.z.infer<typeof ImageSchema>) => void;
  className?: string;
}
function ImageUploadDialog({
  isEditDialogOpen,
  onOpenDialogFunc,
  submit,
  className,
}: DialogProps) {
  const form = useForm<ImageSchemaType>({
    mode: "onSubmit",
    resolver: zodResolver(ImageSchema),
    defaultValues: {
      src: "",
      file: undefined,
    },
  });
  function handleFormSubmit(e: ImageSchemaType) {
    onOpenDialogFunc(false);
    submit(e);
  }
  return (
    <Dialog open={isEditDialogOpen} onOpenChange={onOpenDialogFunc}>
      <Form {...form}>
        <form className={cn("upload-form", className)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Upload Image</DialogTitle>
              <DialogDescription>
                Upload an image to be used in your document.
              </DialogDescription>
            </DialogHeader>

            <Tabs defaultValue="upload" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="upload">Upload Image</TabsTrigger>
                <TabsTrigger value="link">Image Link</TabsTrigger>
              </TabsList>
              <TabsContent value="upload">
                <FormField
                  control={form.control}
                  name="file"
                  render={() => (
                    <>
                      <FormItem>
                        <FormLabel>Circle Image</FormLabel>
                        <FormControl className="hover:bg-slate-300 cursor-pointer">
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={(event) => {
                              handleUpload(
                                event.target.files
                                  ? event.target.files[0]
                                  : null
                              ).then((res: string) => {
                                form.setValue("src", res);
                              });
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
              </TabsContent>
              <TabsContent value="link">
                <FormField
                  control={form.control}
                  name="src"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image src</FormLabel>
                      <FormControl>
                        <Input placeholder="title ..." {...field} />
                      </FormControl>
                      <FormDescription>Enter image url</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
            </Tabs>

            <DialogFooter className="sm:justify-between">
              <Button type="button" onClick={() => onOpenDialogFunc(false)}>
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={form.handleSubmit(handleFormSubmit)}
              >
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Form>
    </Dialog>
  );
}

export default AddImage;
