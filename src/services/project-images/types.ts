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

interface ProjectImages {
  id: string;
  project_id: string;
  name: string;
  alt: string;
  created_at: string;
  url: string;
}

export interface ResponseProjectImages {
  code: number;
  success: boolean;
  message: string;
  data: ProjectImages[];
}

export interface ResponseProjectImage {
  code: number;
  success: boolean;
  message: string;
  data: ProjectImages;
}
