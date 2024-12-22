import { Users } from "@services/users/types";

export interface TableHeader<T> {
  key: keyof T; // Properti dari tipe T
  header: string; // Label kolom
}

export const USER_TABLE_HEADER: TableHeader<Users>[] = [
  {
    key: "id",
    header: "Id",
  },
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
