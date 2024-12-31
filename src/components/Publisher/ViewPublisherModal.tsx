import React from 'react';
import Modal from '../Modal/Modal';
import { Publisher } from '../../types/publisher';
import { Pencil, Globe, Mail, Phone, MapPin, Calendar, BookOpen } from 'lucide-react';

interface ViewPublisherModalProps {
  isOpen: boolean;
  onClose: () => void;
  publisher: Publisher;
  onEdit: () => void;
}

const ViewPublisherModal: React.FC<ViewPublisherModalProps> = ({
  isOpen,
  onClose,
  publisher,
  onEdit,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Publisher Details">
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {publisher.name}
            </h3>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Mail size={16} />
                <span>{publisher.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Phone size={16} />
                <span>{publisher.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPin size={16} />
                <span>{publisher.address}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <BookOpen size={16} />
                <span>{publisher.booksPublished.toLocaleString()} books published</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Calendar size={16} />
                <span>Founded in {publisher.foundedYear}</span>
              </div>
              {publisher.website && (
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Globe size={16} />
                  <a
                    href={publisher.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {publisher.website}
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
      </div>
    </Modal>
  );
};

export default ViewPublisherModal;