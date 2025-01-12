export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: string;
  width: number;
  height: number;
}

export interface Category {
  id: string;
  label: string;
}