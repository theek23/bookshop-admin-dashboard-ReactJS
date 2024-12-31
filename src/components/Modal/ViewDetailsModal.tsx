import React from 'react';
import Modal from './Modal';
import { Book, Customer, Order } from '../../types';
import StatusBadge from '../Table/StatusBadge';
import CustomerAddresses from '../Customer/CustomerAddresses';
import { Pencil } from 'lucide-react';

interface ViewDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: Book | Customer | Order;
  type: 'book' | 'customer' | 'order';
  onEdit?: () => void;
}

interface DetailItemProps {
  label: string;
  value: React.ReactNode;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => (
  <div>
    <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
    <div className="mt-1 text-gray-900 dark:text-gray-100">{value}</div>
  </div>
);

const ViewDetailsModal: React.FC<ViewDetailsModalProps> = ({
  isOpen,
  onClose,
  item,
  type,
  onEdit,
}) => {
  const renderDetails = () => {
    switch (type) {
      case 'book':
        const book = item as Book;
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <DetailItem label="Title" value={book.title} />
              <DetailItem label="Author" value={book.author} />
              <DetailItem label="ISBN" value={book.isbn} />
              <DetailItem label="Price" value={`$${book.price.toFixed(2)}`} />
              <DetailItem label="Stock" value={book.stock.toString()} />
              <DetailItem label="Category" value={book.category} />
              <DetailItem
                label="Status"
                value={<StatusBadge status={book.status} />}
              />
            </div>
          </div>
        );

      case 'customer':
        const customer = item as Customer;
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div className="grid grid-cols-2 gap-4 flex-1">
                <DetailItem label="First Name" value={customer.firstName} />
                <DetailItem label="Last Name" value={customer.lastName} />
                <DetailItem label="Email" value={customer.email} />
                <DetailItem label="Phone" value={customer.phone} />
                <DetailItem label="Orders" value={customer.orders.toString()} />
                <DetailItem
                  label="Total Spent"
                  value={`$${customer.totalSpent.toFixed(2)}`}
                />
                <DetailItem label="Join Date" value={customer.joinDate} />
                <DetailItem
                  label="Status"
                  value={<StatusBadge status={customer.status} />}
                />
              </div>
              {onEdit && (
                <button
                  onClick={onEdit}
                  className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                >
                  <Pencil size={20} />
                </button>
              )}
            </div>
            
            {customer.addresses && customer.addresses.length > 0 && (
              <CustomerAddresses addresses={customer.addresses} />
            )}
          </div>
        );

      case 'order':
        const order = item as Order;
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <DetailItem label="Order ID" value={order.id} />
              <DetailItem label="Customer" value={order.customer} />
              <DetailItem label="Email" value={order.email} />
              <DetailItem label="Total" value={order.total} />
              <DetailItem label="Date" value={order.date} />
              <DetailItem
                label="Status"
                value={<StatusBadge status={order.status} />}
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Books</h3>
              <ul className="list-disc list-inside space-y-1">
                {order.books.map((book, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300">{book}</li>
                ))}
              </ul>
            </div>
          </div>
        );
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`View ${type.charAt(0).toUpperCase() + type.slice(1)} Details`}
    >
      {renderDetails()}
    </Modal>
  );
};

export default ViewDetailsModal;