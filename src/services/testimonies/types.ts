export interface BodyTestimonie {
  id: string;
  client_name: string;
  description: string;
  rating: number;
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

interface Testimonies {
  id: string;
  client_name: string;
  description: string;
  rating: number;
  created_at: string;
}

interface Meta {
  page: string;
  per_page: string;
  total_data: number;
  total_pages: number;
}

export interface ResponseTestimonies {
  code: number;
  success: boolean;
  message: string;
  data: Testimonies[];
  meta: Meta;
}

export interface ResponseTestimonie {
  code: number;
  success: boolean;
  message: string;
  data: Testimonies;
}
