import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { Publisher } from '../../types/publisher';
import PublisherForm from './PublisherForm';

interface EditPublisherModalProps {
  isOpen: boolean;
  onClose: () => void;
  publisher: Publisher;
  onSave: (publisher: Publisher) => void;
}

const EditPublisherModal: React.FC<EditPublisherModalProps> = ({
  isOpen,
  onClose,
  publisher: initialPublisher,
  onSave,
}) => {
  const [publisher, setPublisher] = useState<Publisher>(initialPublisher);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(publisher);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Publisher">
      <PublisherForm
        publisher={publisher}
        onChange={setPublisher}
        onSubmit={handleSubmit}
        onCancel={onClose}
        submitLabel="Save Changes"
      />
    </Modal>
  );
};

export default EditPublisherModal;