import { Category } from '../types/category';

export const mockCategories: Category[] = [
  {
    id: 1,
    name: 'Fiction',
    slug: 'fiction',
    description: 'Novels and fictional stories',
    booksCount: 145,
    createdAt: '2024-01-15',
    status: 'active'
  },
  {
    id: 2,
    name: 'Science Fiction',
    slug: 'science-fiction',
    description: 'Future and science-based fiction',
    booksCount: 89,
    createdAt: '2024-01-20',
    status: 'active'
  },
  {
    id: 3,
    name: 'Mystery',
    slug: 'mystery',
    description: 'Mystery and detective stories',
    booksCount: 67,
    createdAt: '2024-01-25',
    status: 'active'
  }
];