import React, { useState } from 'react';
import Modal from './Modal';
import { InventoryItem } from '../../types/inventory';
import { useCurrency } from '../../utils/currency';
import TableActions from '../Table/TableActions';
import { Package2, Bookmark, Hash, DollarSign, BarChart2, FolderOpen, Star } from 'lucide-react';
import { mockAuthors } from '../../data/mockAuthors';
import { mockPublishers } from '../../data/mockPublishers';
import { mockReviews } from '../../data/mockReviews';
import ReviewList from '../Inventory/Reviews/ReviewList';

interface ViewInventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: InventoryItem;
  onEdit?: () => void;
  onDelete?: () => void;
}

const ViewInventoryModal: React.FC<ViewInventoryModalProps> = ({ 
  isOpen, 
  onClose, 
  item,
  onEdit,
  onDelete 
}) => {
  const { format } = useCurrency();
  const [activeTab, setActiveTab] = useState<'details' | 'reviews'>('details');
  const [reviews, setReviews] = useState(mockReviews);

  const author = mockAuthors.find(a => a.id === item.authorId);
  const publisher = mockPublishers.find(p => p.id === item.publisherId);

  const details = [
    { icon: Package2, label: 'ISBN', value: item.isbn },
    { icon: DollarSign, label: 'Selling Price', value: format(item.sellingPrice) },
    { icon: DollarSign, label: 'Buying Price', value: format(item.buyingPrice) },
    { icon: Hash, label: 'Stock', value: item.stock },
    { icon: FolderOpen, label: 'Category', value: item.category },
    { icon: BarChart2, label: 'Status', value: item.status },
  ];

  const handleToggleVisibility = (reviewId: string) => {
    setReviews(prev => 
      prev.map(review =>
        review.id === reviewId
          ? { ...review, isPublic: !review.isPublic }
          : review
      )
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Inventory Details">
      <div className="space-y-6">
        {/* Header with Actions */}
        <div className="flex justify-between items-start">
          <div className="flex gap-6">
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-44 object-cover rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <div className="mt-2 space-y-1">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  by {author?.name || 'Unknown Author'}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Published by {publisher?.name || 'Unknown Publisher'}
                </p>
              </div>
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                <Bookmark size={14} className="mr-1" />
                {item.category}
              </div>
            </div>
          </div>
          <TableActions onEdit={onEdit} onDelete={onDelete} />
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'details'
                  ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Details
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'reviews'
                  ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Reviews
              <Star size={16} />
            </button>
          </div>
        </div>

        {activeTab === 'details' ? (
          <>
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
                {item.description || 'No description available.'}
              </p>
            </div>
          </>
        ) : (
          <div className="mt-6">
            <ReviewList 
              reviews={reviews} 
              onToggleVisibility={handleToggleVisibility}
            />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ViewInventoryModal;