export interface BodyMyProject {
  id: string;
  user_id: string;
  title: string;
  tech_stack: string;
  github_url: string;
  web_url: string;
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

export interface MyProjects {
  id: string;
  user_id: string;
  title: string;
  tech_stack: string;
  github_url: string;
  web_url: string;
  created_at: string;
}

interface Meta {
  page: string;
  per_page: string;
  total_data: number;
  total_pages: number;
}

export interface ResponseMyProjects {
  code: number;
  success: boolean;
  message: string;
  data: MyProjects[];
  meta: Meta;
}

export interface ResponseMyProject {
  code: number;
  success: boolean;
  message: string;
  data: MyProjects;
}
