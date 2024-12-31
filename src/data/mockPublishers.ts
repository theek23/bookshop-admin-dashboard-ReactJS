import { Publisher } from '../types/publisher';

export const mockPublishers: Publisher[] = [
  {
    id: 1,
    name: 'Penguin Random House',
    email: 'contact@penguinrandomhouse.com',
    phone: '+1 212 366 2000',
    address: '1745 Broadway, New York, NY 10019',
    website: 'https://www.penguinrandomhouse.com',
    booksPublished: 15000,
    foundedYear: 1927
  },
  {
    id: 2,
    name: 'HarperCollins',
    email: 'contact@harpercollins.com',
    phone: '+1 212 207 7000',
    address: '195 Broadway, New York, NY 10007',
    website: 'https://www.harpercollins.com',
    booksPublished: 10000,
    foundedYear: 1817
  },
  {
    id: 3,
    name: 'Simon & Schuster',
    email: 'contact@simonandschuster.com',
    phone: '+1 212 698 7000',
    address: '1230 Avenue of the Americas, New York, NY 10020',
    website: 'https://www.simonandschuster.com',
    booksPublished: 8000,
    foundedYear: 1924
  }
];