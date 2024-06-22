import { Post, PostStatus } from "@/types/posst-type";

const postDefaultData: Post[] = [
  {
    id: 11002,
    featured_image: "/blog_md/spring_boot_dark.png",
    status: PostStatus.published,
    title: "A Demo app to demonstrate spring boot with vault secrets",
    content: "/blog_md/spring_boot_pg_jpa_vault_k8s.md",
    description:
      "Project for demonstrating spring boot with vault security with APPROLE and used dekorate to generate kubernetes app deployment manifests",
  },
  {
    id: 11001,
    featured_image: "/placeholder.png",
    status: PostStatus.published,
    title: "How To configure keycloak with react app",
    content: "/blog_md/Keyclock_notes.md",
    description:
      "Setting up keycloak local using docker and configuring it for auspicate a react app",
  },
];

export { postDefaultData };
