import React from 'react';
import { Star, Eye, EyeOff } from 'lucide-react';
import { Review } from '../../../types/review';

interface ReviewListProps {
  reviews: Review[];
  onToggleVisibility: (reviewId: string) => void;
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, onToggleVisibility }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="p-4 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900 dark:text-white">
                  {review.customerName}
                </span>
                <div className="flex items-center">{renderStars(review.rating)}</div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {review.createdAt}
              </div>
            </div>
            <button
              onClick={() => onToggleVisibility(review.id)}
              className={`p-1.5 rounded-lg transition-colors ${
                review.isPublic
                  ? 'text-green-600 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/20'
                  : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              title={review.isPublic ? 'Public Review' : 'Private Review'}
            >
              {review.isPublic ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;