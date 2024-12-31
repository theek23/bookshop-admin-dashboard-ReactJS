import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { Publisher } from '../../types/publisher';
import PublisherForm from './PublisherForm';

interface AddPublisherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (publisher: Omit<Publisher, 'id'>) => void;
}

const AddPublisherModal: React.FC<AddPublisherModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [publisher, setPublisher] = useState<Omit<Publisher, 'id'>>({
    name: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    booksPublished: 0,
    foundedYear: new Date().getFullYear()
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(publisher);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Publisher">
      <PublisherForm
        publisher={publisher}
        onChange={setPublisher}
        onSubmit={handleSubmit}
        onCancel={onClose}
        submitLabel="Add Publisher"
      />
    </Modal>
  );
};

export default AddPublisherModal;