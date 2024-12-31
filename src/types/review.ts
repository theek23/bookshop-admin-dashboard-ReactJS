export interface Review {
  id: string;
  inventoryId: number;
  customerName: string;
  rating: number;
  comment: string;
  isPublic: boolean;
  createdAt: string;
}