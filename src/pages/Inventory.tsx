import React, { useState } from 'react';
import { Search, Plus, Users, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import DataTable from '../components/Table/DataTable';
import StatusBadge from '../components/Table/StatusBadge';
import TableActions from '../components/Table/TableActions';
import { mockInventory } from '../data/mockInventory';
import { InventoryItem } from '../types/inventory';
import { useModal } from '../hooks/useModal';
import ViewInventoryModal from '../components/Modal/ViewInventoryModal';
import EditInventoryModal from '../components/Modal/EditInventoryModal';
import DeleteConfirmationModal from '../components/Modal/DeleteConfirmationModal';
import { useCurrency } from '../utils/currency';
import { useSettings } from '../contexts/SettingsContext';
import { mockAuthors } from '../data/mockAuthors';

const Inventory = () => {
  const { settings } = useSettings();
  const { format } = useCurrency();
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const viewModal = useModal();
  const editModal = useModal();
  const deleteModal = useModal();

  const handleEdit = (item: InventoryItem) => {
    console.log('Editing inventory item:', item);
    editModal.closeModal();
  };

  const handleDelete = () => {
    console.log('Deleting inventory item:', selectedItem?.id);
    deleteModal.closeModal();
  };

  const getAuthorName = (authorId: number) => {
    const author = mockAuthors.find(a => a.id === authorId);
    return author ? author.name : 'Unknown Author';
  };

  const columns = [
    { 
      key: 'image',
      label: 'Image',
      render: (value: string) => (
        <img 
          src={value} 
          alt="Item" 
          className="w-12 h-16 object-cover rounded"
        />
      )
    },
    { 
      key: 'title',
      label: 'Title',
      render: (value: string, item: InventoryItem) => (
        <div>
          <div className="font-medium text-gray-900 dark:text-white">{value}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {getAuthorName(item.authorId)}
          </div>
        </div>
      )
    },
    { 
      key: 'isbn',
      label: 'ISBN',
      render: (value: string) => (
        <span className="text-gray-900 dark:text-white">{value}</span>
      )
    },
    { 
      key: 'sellingPrice',
      label: 'Price',
      render: (value: number) => (
        <div>
          <div className="text-gray-900 dark:text-white">{format(value)}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Cost: {format(value)}
          </div>
        </div>
      )
    },
    { 
      key: 'stock',
      label: 'Stock',
      render: (value: number) => (
        <span className="text-gray-900 dark:text-white">{value}</span>
      )
    },
    { 
      key: 'category',
      label: 'Category',
      render: (value: string) => (
        <span className="text-gray-900 dark:text-white">{value}</span>
      )
    },
    {
      key: 'status',
      label: 'Status',
      render: (status: string) => <StatusBadge status={status} />
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_: any, item: InventoryItem) => (
        <TableActions
          onView={() => {
            setSelectedItem(item);
            viewModal.openModal();
          }}
          onEdit={() => {
            setSelectedItem(item);
            editModal.openModal();
          }}
          onDelete={() => {
            setSelectedItem(item);
            deleteModal.openModal();
          }}
        />
      )
    }
  ] as const;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {settings.inventoryTitle}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Manage your inventory items
        </p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search inventory..."
            className="pl-10 pr-4 py-2 border dark:border-gray-700 rounded-lg w-full sm:w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
        <div className="flex gap-4">
          <select className="border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <option>All Categories</option>
            <option>Fiction</option>
            <option>Non-Fiction</option>
            <option>Science</option>
          </select>
          <Link
            to="/inventory/authors"
            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center gap-2"
          >
            <Users size={20} />
            Authors
          </Link>
          <Link
            to="/inventory/publishers"
            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center gap-2"
          >
            <Building size={20} />
            Publishers
          </Link>
          <Link
            to="/inventory/add"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 flex items-center gap-2"
          >
            <Plus size={20} />
            Add Item
          </Link>
        </div>
      </div>

      <DataTable columns={columns} data={mockInventory} />

      {selectedItem && (
        <>
          <ViewInventoryModal
            isOpen={viewModal.isOpen}
            onClose={viewModal.closeModal}
            item={selectedItem}
            onEdit={() => {
              viewModal.closeModal();
              editModal.openModal();
            }}
            onDelete={() => {
              viewModal.closeModal();
              deleteModal.openModal();
            }}
          />
          <EditInventoryModal
            isOpen={editModal.isOpen}
            onClose={editModal.closeModal}
            onSave={handleEdit}
            item={selectedItem}
          />
          <DeleteConfirmationModal
            isOpen={deleteModal.isOpen}
            onClose={deleteModal.closeModal}
            onConfirm={handleDelete}
            itemName={selectedItem.title}
          />
        </>
      )}
    </div>
  );
};

export default Inventory;