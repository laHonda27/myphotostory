interface GalleryImage {
  url: string;
  alt: string;
}

export interface PricingCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  gallery: GalleryImage[];
  startingPrice: number;
  features: string[];
  link: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}