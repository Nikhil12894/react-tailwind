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
  {
    id: 11003,
    featured_image: "/blog_md/spring_boot_dark.png",
    status: PostStatus.published,
    title: "A Demo app to demonstrate spring boot with vault secrets",
    content: "/blog_md/spring_boot_pg_jpa_vault_k8s.md",
    description:
      "Project for demonstrating spring boot with vault security with APPROLE and used dekorate to generate kubernetes app deployment manifests",
  },
  {
    id: 11004,
    featured_image: "/placeholder.png",
    status: PostStatus.published,
    title: "How To configure keycloak with react app",
    content: "/blog_md/Keyclock_notes.md",
    description:
      "Setting up keycloak local using docker and configuring it for auspicate a react app",
  },
  {
    id: 11005,
    featured_image: "/blog_md/spring_boot_dark.png",
    status: PostStatus.published,
    title: "A Demo app to demonstrate spring boot with vault secrets",
    content: "/blog_md/spring_boot_pg_jpa_vault_k8s.md",
    description:
      "Project for demonstrating spring boot with vault security with APPROLE and used dekorate to generate kubernetes app deployment manifests",
  },
  {
    id: 11006,
    featured_image: "/placeholder.png",
    status: PostStatus.published,
    title: "How To configure keycloak with react app",
    content: "/blog_md/Keyclock_notes.md",
    description:
      "Setting up keycloak local using docker and configuring it for auspicate a react app",
  },
  {
    id: 11007,
    featured_image: "/blog_md/spring_boot_dark.png",
    status: PostStatus.published,
    title: "A Demo app to demonstrate spring boot with vault secrets",
    content: "/blog_md/spring_boot_pg_jpa_vault_k8s.md",
    description:
      "Project for demonstrating spring boot with vault security with APPROLE and used dekorate to generate kubernetes app deployment manifests",
  },
  {
    id: 11008,
    featured_image: "/placeholder.png",
    status: PostStatus.published,
    title: "How To configure keycloak with react app",
    content: "/blog_md/Keyclock_notes.md",
    description:
      "Setting up keycloak local using docker and configuring it for auspicate a react app",
  },
  {
    id: 11009,
    featured_image: "/blog_md/spring_boot_dark.png",
    status: PostStatus.published,
    title: "A Demo app to demonstrate spring boot with vault secrets",
    content: "/blog_md/spring_boot_pg_jpa_vault_k8s.md",
    description:
      "Project for demonstrating spring boot with vault security with APPROLE and used dekorate to generate kubernetes app deployment manifests",
  },
  {
    id: 11010,
    featured_image: "/placeholder.png",
    status: PostStatus.published,
    title: "How To configure keycloak with react app",
    content: "/blog_md/Keyclock_notes.md",
    description:
      "Setting up keycloak local using docker and configuring it for auspicate a react app",
  },
];

import { ColumnConfig } from "@/components/ui/data-table-client/data-table-column-def";

const postTableColumns: ColumnConfig[] = [
  // {
  //   accessorKey: "select",
  //   header: "Select",
  // },
  {
    accessorKey: "featured_image",
    header: "Featured Image",
    // enableSorting: true,
  },
  {
    accessorKey: "description",
    header: "Description",
    // enableSorting: true,
  },
  {
    accessorKey: "title",
    header: "Title",
    // enableSorting: true,
  },
];

export { postDefaultData, postTableColumns };
