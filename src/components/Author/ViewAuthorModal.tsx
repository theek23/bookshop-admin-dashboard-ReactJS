import React from 'react';
import Modal from '../Modal/Modal';
import { Author } from '../../types/author';
import { Pencil, Globe, Mail, Phone, BookOpen } from 'lucide-react';

interface ViewAuthorModalProps {
  isOpen: boolean;
  onClose: () => void;
  author: Author;
  onEdit: () => void;
}

const ViewAuthorModal: React.FC<ViewAuthorModalProps> = ({
  isOpen,
  onClose,
  author,
  onEdit,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Author Details">
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {author.name}
            </h3>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Mail size={16} />
                <span>{author.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Phone size={16} />
                <span>{author.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <BookOpen size={16} />
                <span>{author.books} books</span>
              </div>
              {author.website && (
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Globe size={16} />
                  <a
                    href={author.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {author.website}
                  </a>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={onEdit}
            className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
          >
            <Pencil size={20} />
          </button>
        </div>

        {author.bio && (
          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Biography
            </h4>
            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
              {author.bio}
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ViewAuthorModal;