export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    name: string;
  };
  images: string[]; // Added type definition for images
  // other properties...
}
