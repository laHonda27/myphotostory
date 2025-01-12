export interface ServiceType {
  title: string;
  description: string;
  images: string[];
  imageAlts: string[];
  basePrice: number;
  includes: string[];
  testimonials: TestimonialType[];
}

export interface TestimonialType {
  name: string;
  date: string;
  rating: number;
  text: string;
  profileImage?: string;
}