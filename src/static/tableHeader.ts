import { Blogs } from "@services/blogs/types";
import { MyProjects } from "@services/my-projects/types";
import { Testimonies } from "@services/testimonies/types";
import { Users } from "@services/users/types";

export interface TableHeader<T> {
  key: keyof T; // Properti dari tipe T
  header: string; // Label kolom
}

export const USER_TABLE_HEADER: TableHeader<Users>[] = [
  {
    key: "username",
    header: "Username",
  },
  {
    key: "profile_name",
    header: "Profile Name",
  },
  {
    key: "is_admin",
    header: "Is Admin",
  },
  {
    key: "created_at",
    header: "Date",
  },
];

export const BLOG_TABLE_HEADER: TableHeader<Blogs>[] = [
  {
    key: "title",
    header: "Title",
  },
  {
    key: "writer_name",
    header: "Writer",
  },
  {
    key: "category",
    header: "Category",
  },
  {
    key: "tags",
    header: "Tags",
  },
  {
    key: "updated_at",
    header: "Updated",
  },
];

export const PROJECT_TABLE_HEADER: TableHeader<MyProjects>[] = [
  {
    key: "title",
    header: "Project Title",
  },
  {
    key: "tech_stack",
    header: "Tech Stack",
  },
  {
    key: "github_url",
    header: "Github",
  },
  {
    key: "web_url",
    header: "Web",
  },
  {
    key: "created_at",
    header: "Created",
  },
];

export const TESTI_TABLE_HEADER: TableHeader<Testimonies>[] = [
  {
    key: "client_name",
    header: "Client Name",
  },
  {
    key: "description",
    header: "Description",
  },
  {
    key: "rating",
    header: "Rating",
  },
  {
    key: "created_at",
    header: "Created",
  },
];