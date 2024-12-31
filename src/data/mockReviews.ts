import { Review } from '../types/review';

export const mockReviews: Review[] = [
  {
    id: '1',
    inventoryId: 1,
    customerName: 'John Doe',
    rating: 5,
    comment: 'Excellent book! The story was captivating from start to finish.',
    isPublic: true,
    createdAt: '2024-02-20'
  },
  {
    id: '2',
    inventoryId: 1,
    customerName: 'Jane Smith',
    rating: 4,
    comment: 'Great read, but the ending could have been better.',
    isPublic: true,
    createdAt: '2024-02-19'
  },
  {
    id: '3',
    inventoryId: 1,
    customerName: 'Mike Johnson',
    rating: 3,
    comment: 'Average book, not what I expected.',
    isPublic: false,
    createdAt: '2024-02-18'
  }
];