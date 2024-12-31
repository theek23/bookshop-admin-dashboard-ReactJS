import React, { useState } from 'react';
import { Search } from 'lucide-react';
import DataTable from '../components/Table/DataTable';
import StatusBadge from '../components/Table/StatusBadge';
import TableActions from '../components/Table/TableActions';
import { mockOrders } from '../data/mockOrders';
import { Order } from '../types/order';
import { useModal } from '../hooks/useModal';
import ViewOrderModal from '../components/Modal/ViewOrderModal';
import { useCurrency } from '../utils/currency';

const Orders = () => {
  const { format } = useCurrency();
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const viewModal = useModal();

  const columns = [
    { 
      key: 'id',
      label: 'Order ID',
      render: (value: string) => (
        <span className="text-gray-900 dark:text-gray-100">{value}</span>
      )
    },
    { 
      key: 'customer',
      label: 'Customer',
      render: (_: string, item: Order) => (
        <div>
          <div className="text-gray-900 dark:text-gray-100">{item.customer}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{item.email}</div>
        </div>
      )
    },
    { 
      key: 'books',
      label: 'Books',
      render: (books: string[]) => (
        <span className="text-gray-900 dark:text-gray-100">
          {books.join(', ')}
        </span>
      )
    },
    { 
      key: 'total',
      label: 'Total',
      render: (_: string, order: Order) => (
        <span className="text-gray-900 dark:text-gray-100">
          {format(order.subtotal + order.tax + order.shipping)}
        </span>
      )
    },
    { 
      key: 'date',
      label: 'Date',
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
      render: (_: any, order: Order) => (
        <TableActions
          onView={() => {
            setSelectedOrder(order);
            viewModal.openModal();
          }}
        />
      )
    }
  ] as const;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Orders</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">Manage your orders</p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search orders..."
            className="pl-10 pr-4 py-2 border dark:border-gray-700 rounded-lg w-full sm:w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
        <div className="flex gap-4">
          <select className="border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <option>All Status</option>
            <option>Completed</option>
            <option>Processing</option>
            <option>Pending</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500">
            Export
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <DataTable columns={columns} data={mockOrders} />
      </div>

      {selectedOrder && (
        <ViewOrderModal
          isOpen={viewModal.isOpen}
          onClose={viewModal.closeModal}
          order={selectedOrder}
        />
      )}
    </div>
  );
};

export default Orders;