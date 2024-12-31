import { Book } from '../types/book';

export const mockBooks: Book[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    isbn: '978-0525559474',
    price: 24.99,
    stock: 45,
    category: 'Fiction',
    status: 'In Stock',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=100',
    title: '1984',
    author: 'George Orwell',
    isbn: '978-0451524935',
    price: 12.99,
    stock: 32,
    category: 'Fiction',
    status: 'In Stock',
  },
  // ... rest of the mock data with images
];