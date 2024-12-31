import React, { useState } from 'react';
import { Search } from 'lucide-react';
import DataTable from '../components/Table/DataTable';
import StatusBadge from '../components/Table/StatusBadge';
import TableActions from '../components/Table/TableActions';
import { mockCustomers } from '../data/mockCustomers';
import { Customer } from '../types/customer';
import { useModal } from '../hooks/useModal';
import ViewDetailsModal from '../components/Modal/ViewDetailsModal';
import EditCustomerModal from '../components/Customer/EditCustomerModal';
import DeleteConfirmationModal from '../components/Modal/DeleteConfirmationModal';
import { getFullName } from '../utils/customer';

const Customers = () => {
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const viewModal = useModal();
  const editModal = useModal();
  const deleteModal = useModal();

  const handleEdit = (customer: Customer) => {
    setCustomers(prev => prev.map(c => c.id === customer.id ? customer : c));
    editModal.closeModal();
  };

  const handleDelete = () => {
    if (selectedCustomer) {
      setCustomers(prev => prev.filter(c => c.id !== selectedCustomer.id));
      deleteModal.closeModal();
    }
  };

  const columns = [
    { 
      key: 'name',
      label: 'Customer',
      render: (_: string, item: Customer) => (
        <div>
          <div className="font-medium text-gray-900 dark:text-gray-100">
            {getFullName(item)}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            ID: #{item.id}
          </div>
        </div>
      )
    },
    {
      key: 'email',
      label: 'Contact',
      render: (_: string, item: Customer) => (
        <div>
          <div className="text-sm text-gray-900 dark:text-gray-100">{item.email}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{item.phone}</div>
        </div>
      )
    },
    { 
      key: 'orders',
      label: 'Orders',
      render: (value: number) => (
        <span className="text-gray-900 dark:text-gray-100">{value}</span>
      )
    },
    { 
      key: 'totalSpent',
      label: 'Total Spent',
      render: (value: number) => (
        <span className="text-gray-900 dark:text-gray-100">
          ${value.toFixed(2)}
        </span>
      )
    },
    { 
      key: 'joinDate',
      label: 'Join Date',
      render: (date: string) => (
        <span className="text-gray-900 dark:text-gray-100">{date}</span>
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
      render: (_: any, customer: Customer) => (
        <TableActions
          onView={() => {
            setSelectedCustomer(customer);
            viewModal.openModal();
          }}
          onEdit={() => {
            setSelectedCustomer(customer);
            editModal.openModal();
          }}
          onDelete={() => {
            setSelectedCustomer(customer);
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
          Customers
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Manage your customers
        </p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search customers..."
            className="pl-10 pr-4 py-2 border dark:border-gray-700 rounded-lg w-full sm:w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
        <div className="flex gap-4">
          <select className="border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500">
            Export
          </button>
        </div>
      </div>

      <DataTable 
        columns={columns} 
        data={customers}
        itemsPerPage={5}
      />

      {selectedCustomer && (
        <>
          <ViewDetailsModal
            isOpen={viewModal.isOpen}
            onClose={viewModal.closeModal}
            item={selectedCustomer}
            type="customer"
            onEdit={() => {
              viewModal.closeModal();
              editModal.openModal();
            }}
          />
          <EditCustomerModal
            isOpen={editModal.isOpen}
            onClose={editModal.closeModal}
            customer={selectedCustomer}
            onSave={handleEdit}
          />
          <DeleteConfirmationModal
            isOpen={deleteModal.isOpen}
            onClose={deleteModal.closeModal}
            onConfirm={handleDelete}
            itemName={getFullName(selectedCustomer)}
          />
        </>
      )}
    </div>
  );
};

export default Customers;