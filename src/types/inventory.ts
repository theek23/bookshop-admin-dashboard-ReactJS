export interface InventoryItem {
  id: number;
  image: string;
  title: string;
  authorId: number;
  publisherId: number;
  isbn: string;
  sellingPrice: number;
  buyingPrice: number;
  stock: number;
  category: string;
  status: 'In Stock' | 'Out of Stock' | 'Low Stock';
  description: string;
}