import React, { useState } from 'react';
import { Plus, Search, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DataTable from '../components/Table/DataTable';
import TableActions from '../components/Table/TableActions';
import { useModal } from '../hooks/useModal';
import { Publisher } from '../types/publisher';
import { mockPublishers } from '../data/mockPublishers';
import AddPublisherModal from '../components/Publisher/AddPublisherModal';
import EditPublisherModal from '../components/Publisher/EditPublisherModal';
import ViewPublisherModal from '../components/Publisher/ViewPublisherModal';
import DeleteConfirmationModal from '../components/Modal/DeleteConfirmationModal';

const Publishers = () => {
  const navigate = useNavigate();
  const [publishers, setPublishers] = useState<Publisher[]>(mockPublishers);
  const [selectedPublisher, setSelectedPublisher] = useState<Publisher | null>(null);
  
  const addModal = useModal();
  const editModal = useModal();
  const viewModal = useModal();
  const deleteModal = useModal();

  const handleAdd = (publisher: Omit<Publisher, 'id'>) => {
    const newPublisher: Publisher = {
      id: Math.max(0, ...publishers.map(p => p.id)) + 1,
      ...publisher
    };
    setPublishers(prev => [...prev, newPublisher]);
    addModal.closeModal();
  };

  const handleEdit = (publisher: Publisher) => {
    setPublishers(prev => prev.map(p => p.id === publisher.id ? publisher : p));
    editModal.closeModal();
  };

  const handleDelete = () => {
    if (selectedPublisher) {
      setPublishers(prev => prev.filter(p => p.id !== selectedPublisher.id));
      deleteModal.closeModal();
    }
  };

  const columns = [
    {
      key: 'name',
      label: 'Name',
      render: (_: string, publisher: Publisher) => (
        <div className="font-medium text-gray-900 dark:text-white">
          {publisher.name}
        </div>
      )
    },
    {
      key: 'email',
      label: 'Contact',
      render: (_: string, publisher: Publisher) => (
        <div>
          <div className="text-gray-600 dark:text-gray-300">{publisher.email}</div>
          <div className="text-sm text-gray-500">{publisher.phone}</div>
        </div>
      )
    },
    {
      key: 'booksPublished',
      label: 'Books Published',
      render: (count: number) => (
        <div className="text-gray-900 dark:text-white">{count.toLocaleString()}</div>
      )
    },
    {
      key: 'foundedYear',
      label: 'Founded',
      render: (year: number) => (
        <div className="text-gray-900 dark:text-white">{year}</div>
      )
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_: any, publisher: Publisher) => (
        <TableActions
          onView={() => {
            setSelectedPublisher(publisher);
            viewModal.openModal();
          }}
          onEdit={() => {
            setSelectedPublisher(publisher);
            editModal.openModal();
          }}
          onDelete={() => {
            setSelectedPublisher(publisher);
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
          <button
            onClick={() => navigate('/inventory')}
            className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Publishers
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Manage publishers in your inventory
        </p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search publishers..."
            className="pl-10 pr-4 py-2 border dark:border-gray-700 rounded-lg w-full sm:w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
        <button
          onClick={addModal.openModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus size={20} />
          Add Publisher
        </button>
      </div>

      <DataTable columns={columns} data={publishers} />

      <AddPublisherModal
        isOpen={addModal.isOpen}
        onClose={addModal.closeModal}
        onAdd={handleAdd}
      />

      {selectedPublisher && (
        <>
          <ViewPublisherModal
            isOpen={viewModal.isOpen}
            onClose={viewModal.closeModal}
            publisher={selectedPublisher}
            onEdit={() => {
              viewModal.closeModal();
              editModal.openModal();
            }}
          />
          <EditPublisherModal
            isOpen={editModal.isOpen}
            onClose={editModal.closeModal}
            publisher={selectedPublisher}
            onSave={handleEdit}
          />
          <DeleteConfirmationModal
            isOpen={deleteModal.isOpen}
            onClose={deleteModal.closeModal}
            onConfirm={handleDelete}
            itemName={selectedPublisher.name}
          />
        </>
      )}
    </div>
  );
};

export default Publishers;