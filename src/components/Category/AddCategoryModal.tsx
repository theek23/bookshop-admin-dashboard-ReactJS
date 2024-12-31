import React from 'react';
import Modal from '../Modal/Modal';
import { Category } from '../../types/category';
import CategoryForm from './CategoryForm';

interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (category: Omit<Category, 'id' | 'booksCount' | 'createdAt'>) => void;
}

const AddCategoryModal: React.FC<AddCategoryModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const handleSubmit = (formData: Omit<Category, 'id' | 'booksCount' | 'createdAt'>) => {
    onAdd(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Category">
      <CategoryForm
        onSubmit={handleSubmit}
        onCancel={onClose}
        submitLabel="Add Category"
      />
    </Modal>
  );
};

export default AddCategoryModal;