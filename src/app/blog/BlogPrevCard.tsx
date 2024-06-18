import { Card } from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;
interface BlogPrevCardProps {
  cardProps?: CardProps;
}

export function BlogPrevCard({ cardProps }: BlogPrevCardProps) {
  return (
    <article className="max-w-xs">
      <a href="#">
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
          className="mb-5 rounded-lg"
          alt="Image 1"
        />
      </a>
      {JSON.stringify(cardProps)}
      <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
        <a href="#">Our first office</a>
      </h2>
      <p className="mb-4 text-gray-500 dark:text-gray-400">
        Over the past year, Volosoft has undergone many changes! After months of
        preparation.
      </p>
      <a
        href="#"
        className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
      >
        Read in 2 minutes
      </a>
    </article>
  );
}
