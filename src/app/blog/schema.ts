import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  featuredImage: z
    .any()
    .refine(
      (file) => file && file.type.startsWith("image/"),
      "Only image files are allowed"
    ),
});

export { schema };
