import React from 'react';
import Modal from './Modal';
import { Book } from '../../types/book';
import { useCurrency } from '../../utils/currency';
import TableActions from '../Table/TableActions';
import { Package2, Bookmark, Hash, DollarSign, BarChart2, FolderOpen } from 'lucide-react';

interface ViewBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: Book;
  onEdit?: () => void;
  onDelete?: () => void;
}

const ViewBookModal: React.FC<ViewBookModalProps> = ({ 
  isOpen, 
  onClose, 
  book,
  onEdit,
  onDelete 
}) => {
  const { format } = useCurrency();

  const details = [
    { icon: Package2, label: 'ISBN', value: book.isbn },
    { icon: DollarSign, label: 'Price', value: format(book.price) },
    { icon: Hash, label: 'Stock', value: book.stock },
    { icon: FolderOpen, label: 'Category', value: book.category },
    { icon: BarChart2, label: 'Status', value: book.status },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book Details">
      <div className="space-y-6">
        {/* Header with Actions */}
        <div className="flex justify-between items-start">
          <div className="flex gap-6">
            <img
              src={book.image}
              alt={book.title}
              className="w-32 h-44 object-cover rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {book.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">
                by {book.author}
              </p>
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                <Bookmark size={14} className="mr-1" />
                {book.category}
              </div>
            </div>
          </div>
          <TableActions onEdit={onEdit} onDelete={onDelete} />
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {details.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white dark:bg-gray-700">
                  <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white mt-0.5">
                    {value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Description Section */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Description
          </h4>
          <p className="text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Stock History */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Stock History
          </h4>
          <div className="h-32 flex items-end gap-2">
            {[65, 45, 78, 52, 80, 58, 72].map((height, index) => (
              <div key={index} className="flex-1">
                <div
                  className="bg-blue-100 dark:bg-blue-900/50 rounded-t hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewBookModal;