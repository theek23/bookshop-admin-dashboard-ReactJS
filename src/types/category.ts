export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  booksCount: number;
  createdAt: string;
  status: 'active' | 'inactive';
}