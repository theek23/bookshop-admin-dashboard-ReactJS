export interface Book {
  id: number;
  image: string;
  title: string;
  author: string;
  isbn: string;
  price: number;
  stock: number;
  category: string;
  status: 'In Stock' | 'Out of Stock' | 'Low Stock';
}