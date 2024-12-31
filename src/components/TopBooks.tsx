import React from 'react';
import { useCurrency } from '../utils/currency';

const TopBooks = () => {
  const { format } = useCurrency();
  const books = [
    {
      title: 'The Midnight Library',
      author: 'Matt Haig',
      sales: 245,
      revenue: 3675.55,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100&h=100',
    },
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      sales: 189,
      revenue: 2835.00,
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=100&h=100',
    },
    {
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      sales: 156,
      revenue: 2340.00,
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=100&h=100',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Top Selling Books</h2>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          {books.map((book, index) => (
            <div key={index} className="flex items-center gap-4">
              <img
                src={book.image}
                alt={book.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 dark:text-white">{book.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{book.author}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900 dark:text-white">{format(book.revenue)}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{book.sales} copies sold</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBooks;