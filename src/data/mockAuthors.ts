import { Author } from '../types/author';

export const mockAuthors: Author[] = [
  {
    id: 1,
    name: 'J.K. Rowling',
    email: 'jk.rowling@example.com',
    phone: '+44 20 7123 4567',
    bio: 'British author best known for writing the Harry Potter fantasy series.',
    books: 15,
    website: 'https://www.jkrowling.com'
  },
  {
    id: 2,
    name: 'Stephen King',
    email: 'stephen.king@example.com',
    phone: '+1 207 555 0123',
    bio: 'American author of horror, supernatural fiction, suspense, and fantasy novels.',
    books: 64,
    website: 'https://stephenking.com'
  },
  {
    id: 3,
    name: 'Neil Gaiman',
    email: 'neil.gaiman@example.com',
    phone: '+44 20 7123 4568',
    bio: 'English author of short fiction, novels, comic books, graphic novels, and films.',
    books: 28,
    website: 'https://www.neilgaiman.com'
  }
];