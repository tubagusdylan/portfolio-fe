export interface BodyBlog {
  id: string;
  writer_id: string;
  title: string;
  body: string;
  category: string;
  tags: string;
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

interface Blogs {
  id: string;
  title: string;
  body: string;
  category: string;
  tags: string;
  created_at: string;
  updated_at: string;
  writer_name: string;
}

interface Meta {
  page: string;
  per_page: string;
  total_data: number;
  total_pages: number;
}

export interface ResponseBlogs {
  code: number;
  success: boolean;
  message: string;
  data: Blogs[];
  meta: Meta;
}

export interface ResponseBlog {
  code: number;
  success: boolean;
  message: string;
  data: Blogs;
}
