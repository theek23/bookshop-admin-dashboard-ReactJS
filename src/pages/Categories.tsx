import React, { useState } from 'react';
import { FolderPlus } from 'lucide-react';
import { Category } from '../types/category';
import { mockCategories } from '../data/mockCategories';
import { useModal } from '../hooks/useModal';
import CategoryList from '../components/Category/CategoryList';
import CategorySearch from '../components/Category/CategorySearch';
import AddCategoryModal from '../components/Category/AddCategoryModal';
import EditCategoryModal from '../components/Modal/EditCategoryModal';
import ViewDetailsModal from '../components/Modal/ViewDetailsModal';
import DeleteConfirmationModal from '../components/Modal/DeleteConfirmationModal';

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>(mockCategories);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  
  const addModal = useModal();
  const viewModal = useModal();
  const editModal = useModal();
  const deleteModal = useModal();

  const handleAdd = (category: Omit<Category, 'id' | 'booksCount' | 'createdAt'>) => {
    const newCategory: Category = {
      id: Math.max(0, ...categories.map(c => c.id)) + 1,
      booksCount: 0,
      createdAt: new Date().toISOString().split('T')[0],
      ...category
    };
    setCategories(prev => [...prev, newCategory]);
    addModal.closeModal();
  };

  const handleEdit = (category: Category) => {
    setCategories(prev => prev.map(c => c.id === category.id ? category : c));
    editModal.closeModal();
  };

  const handleDelete = () => {
    if (selectedCategory) {
      setCategories(prev => prev.filter(c => c.id !== selectedCategory.id));
      deleteModal.closeModal();
    }
  };

  const handleSearch = (query: string) => {
    // Implement search logic here
    console.log('Search query:', query);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Categories
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Manage your book categories
        </p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <CategorySearch onSearch={handleSearch} />
        <button
          onClick={addModal.openModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <FolderPlus size={20} />
          Add Category
        </button>
      </div>

      <CategoryList
        categories={categories}
        onView={(category) => {
          setSelectedCategory(category);
          viewModal.openModal();
        }}
        onEdit={(category) => {
          setSelectedCategory(category);
          editModal.openModal();
        }}
        onDelete={(category) => {
          setSelectedCategory(category);
          deleteModal.openModal();
        }}
      />

      <AddCategoryModal
        isOpen={addModal.isOpen}
        onClose={addModal.closeModal}
        onAdd={handleAdd}
      />

      {selectedCategory && (
        <>
          <ViewDetailsModal
            isOpen={viewModal.isOpen}
            onClose={viewModal.closeModal}
            item={selectedCategory}
            type="category"
          />
          <EditCategoryModal
            isOpen={editModal.isOpen}
            onClose={editModal.closeModal}
            onSave={handleEdit}
            category={selectedCategory}
          />
          <DeleteConfirmationModal
            isOpen={deleteModal.isOpen}
            onClose={deleteModal.closeModal}
            onConfirm={handleDelete}
            itemName={selectedCategory.name}
          />
        </>
      )}
    </div>
  );
};

export default Categories;