import React, { useState } from 'react';
import { Plus, Search, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import DataTable from '../components/Table/DataTable';
import TableActions from '../components/Table/TableActions';
import { useModal } from '../hooks/useModal';
import AddAuthorModal from '../components/Author/AddAuthorModal';
import EditAuthorModal from '../components/Author/EditAuthorModal';
import ViewAuthorModal from '../components/Author/ViewAuthorModal';
import DeleteConfirmationModal from '../components/Modal/DeleteConfirmationModal';
import { Author } from '../types/author';
import { mockAuthors } from '../data/mockAuthors';

const Authors = () => {
  const navigate = useNavigate();
  const [authors, setAuthors] = useState<Author[]>(mockAuthors);
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);
  
  const addModal = useModal();
  const editModal = useModal();
  const viewModal = useModal();
  const deleteModal = useModal();

  const handleAdd = (author: Omit<Author, 'id'>) => {
    const newAuthor: Author = {
      id: Math.max(0, ...authors.map(a => a.id)) + 1,
      ...author
    };
    setAuthors(prev => [...prev, newAuthor]);
    addModal.closeModal();
  };

  const handleEdit = (author: Author) => {
    setAuthors(prev => prev.map(a => a.id === author.id ? author : a));
    editModal.closeModal();
  };

  const handleDelete = () => {
    if (selectedAuthor) {
      setAuthors(prev => prev.filter(a => a.id !== selectedAuthor.id));
      deleteModal.closeModal();
    }
  };

  const columns = [
    {
      key: 'name',
      label: 'Name',
      render: (_: string, author: Author) => (
        <div className="font-medium text-gray-900 dark:text-white">
          {author.name}
        </div>
      )
    },
    {
      key: 'email',
      label: 'Email',
      render: (email: string) => (
        <div className="text-gray-600 dark:text-gray-300">{email}</div>
      )
    },
    {
      key: 'phone',
      label: 'Phone',
      render: (phone: string) => (
        <div className="text-gray-600 dark:text-gray-300">{phone}</div>
      )
    },
    {
      key: 'books',
      label: 'Books',
      render: (books: number) => (
        <div className="text-gray-900 dark:text-white">{books}</div>
      )
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_: any, author: Author) => (
        <TableActions
          onView={() => {
            setSelectedAuthor(author);
            viewModal.openModal();
          }}
          onEdit={() => {
            setSelectedAuthor(author);
            editModal.openModal();
          }}
          onDelete={() => {
            setSelectedAuthor(author);
            deleteModal.openModal();
          }}
        />
      )
    }
  ] as const;

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <Link
            to="/inventory"
            className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Authors
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Manage authors in your inventory
        </p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search authors..."
            className="pl-10 pr-4 py-2 border dark:border-gray-700 rounded-lg w-full sm:w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
        <button
          onClick={addModal.openModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus size={20} />
          Add Author
        </button>
      </div>

      <DataTable columns={columns} data={authors} />

      <AddAuthorModal
        isOpen={addModal.isOpen}
        onClose={addModal.closeModal}
        onAdd={handleAdd}
      />

      {selectedAuthor && (
        <>
          <ViewAuthorModal
            isOpen={viewModal.isOpen}
            onClose={viewModal.closeModal}
            author={selectedAuthor}
            onEdit={() => {
              viewModal.closeModal();
              editModal.openModal();
            }}
          />
          <EditAuthorModal
            isOpen={editModal.isOpen}
            onClose={editModal.closeModal}
            author={selectedAuthor}
            onSave={handleEdit}
          />
          <DeleteConfirmationModal
            isOpen={deleteModal.isOpen}
            onClose={deleteModal.closeModal}
            onConfirm={handleDelete}
            itemName={selectedAuthor.name}
          />
        </>
      )}
    </div>
  );
};

export default Authors;