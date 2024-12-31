import { InventoryItem } from '../types/inventory';

export const mockInventory: InventoryItem[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100',
    title: 'The Midnight Library',
    authorId: 1,
    publisherId: 1,
    isbn: '978-0525559474',
    sellingPrice: 24.99,
    buyingPrice: 15.99,
    stock: 45,
    category: 'Fiction',
    status: 'In Stock',
    description: 'A dazzling novel about all the choices that go into a life well lived.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=100',
    title: '1984',
    authorId: 2,
    publisherId: 2,
    isbn: '978-0451524935',
    sellingPrice: 12.99,
    buyingPrice: 8.99,
    stock: 32,
    category: 'Fiction',
    status: 'In Stock',
    description: 'A dystopian social science fiction novel and cautionary tale.'
  }
];