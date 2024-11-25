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

interface BlogImages {
  id: string;
  blog_id: string;
  name: string;
  alt: string;
  created_at: string;
  url: string;
}

export interface ResponseBlogImages {
  code: number;
  success: boolean;
  message: string;
  data: BlogImages[];
}

export interface ResponseBlogImage {
  code: number;
  success: boolean;
  message: string;
  data: BlogImages;
}
