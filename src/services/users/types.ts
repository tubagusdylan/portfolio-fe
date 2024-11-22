export interface BodyUser {
  id: string;
  username: string;
  password: string;
  profileName: string;
  isAdmin: number;
}

export interface ResponsePost {
  code: number;
  success: boolean;
  message: string;
  data: {
    id: string;
  };
}

export interface ResponseDelete {
  code: number;
  success: boolean;
  message: string;
  data: null;
}

interface Users {
  id: string;
  username: string;
  profile_name: string;
  is_admin: number;
  created_at: string;
}

export interface ResponseUsers {
  code: number;
  success: boolean;
  message: string;
  data: Users[];
}

export interface ResponseUser {
  code: number;
  success: boolean;
  message: string;
  data: Users;
}
