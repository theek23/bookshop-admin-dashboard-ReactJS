export interface Publisher {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  website?: string;
  booksPublished: number;
  foundedYear: number;
}