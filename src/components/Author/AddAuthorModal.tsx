import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { Author } from '../../types/author';
import AuthorForm from './AuthorForm';

interface AddAuthorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (author: Omit<Author, 'id'>) => void;
}

const AddAuthorModal: React.FC<AddAuthorModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [author, setAuthor] = useState<Omit<Author, 'id'>>({
    name: '',
    email: '',
    phone: '',
    bio: '',
    books: 0,
    website: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(author);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Author">
      <AuthorForm
        author={author}
        onChange={setAuthor}
        onSubmit={handleSubmit}
        onCancel={onClose}
        submitLabel="Add Author"
      />
    </Modal>
  );
};

export default AddAuthorModal;