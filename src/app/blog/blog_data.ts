import { Post, PostStatus } from "@/types/posst-type";

const postDefaultData: Post[] = [
  {
    id: 11001,
    featured_image: "/placeholder.png",
    status: PostStatus.published,
    title: "How To configure keycloak with react app",
    content: "/blog_md/Keyclock_notes.md",
    description:
      "Setting up keycloak local using docker and configuring it for auspicate a react app",
  },
  {
    id: 11002,
    featured_image: "/placeholder.png",
    status: PostStatus.published,
    title: "Spring-Boot with postgres db configuration and jpa curd app",
    content: "/blog_md/spring_boot_pg_jpa_curd_rest.md",
    description:
      "How to configure spring boot app with postgres data source and use JPA to create rest application for CRUD api",
  },
];

export { postDefaultData };
