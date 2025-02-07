export interface Product {
  id?: string;
  name: string;
  shotDescription: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  categoryId: string;
}
