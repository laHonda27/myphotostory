export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  service: string;
  images?: string[];
  verified: boolean;
}

export interface Category {
  id: string;
  label: string;
}