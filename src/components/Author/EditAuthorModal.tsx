import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { Author } from '../../types/author';
import AuthorForm from './AuthorForm';

interface EditAuthorModalProps {
  isOpen: boolean;
  onClose: () => void;
  author: Author;
  onSave: (author: Author) => void;
}

const EditAuthorModal: React.FC<EditAuthorModalProps> = ({
  isOpen,
  onClose,
  author: initialAuthor,
  onSave,
}) => {
  const [author, setAuthor] = useState<Author>(initialAuthor);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(author);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Author">
      <AuthorForm
        author={author}
        onChange={setAuthor}
        onSubmit={handleSubmit}
        onCancel={onClose}
        submitLabel="Save Changes"
      />
    </Modal>
  );
};

export default EditAuthorModal;