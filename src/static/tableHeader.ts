import { Blogs } from "@services/blogs/types";
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
    key: "body",
    header: "Body",
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
