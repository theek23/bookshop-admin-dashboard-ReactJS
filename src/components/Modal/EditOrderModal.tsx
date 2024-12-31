import React, { useState } from 'react';
import Modal from './Modal';
import { Order, OrderItem } from '../../types/order';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface EditOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: Order;
  onSave: (order: Order) => void;
}

const EditOrderModal: React.FC<EditOrderModalProps> = ({ isOpen, onClose, order, onSave }) => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>(order.items);
  const [customerInfo, setCustomerInfo] = useState({
    name: order.customer,
    email: order.email,
  });

  const handleQuantityChange = (id: string, change: number) => {
    setOrderItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setOrderItems(items => items.filter(item => item.id !== id));
  };

  const calculateTotals = () => {
    const subtotal = orderItems.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
    const tax = subtotal * 0.08;
    const shipping = 4.99;
    return { subtotal, tax, shipping, total: subtotal + tax + shipping };
  };

  const handleSave = () => {
    const { subtotal, tax, shipping, total } = calculateTotals();
    onSave({
      ...order,
      customer: customerInfo.name,
      email: customerInfo.email,
      total: `$${total.toFixed(2)}`,
      books: orderItems.map(item => item.title),
      items: orderItems,
      subtotal,
      tax,
      shipping
    });
    onClose();
  };

  const totals = calculateTotals();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Order">
      <div className="space-y-6">
        {/* Customer Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Customer Name
            </label>
            <input
              type="text"
              value={customerInfo.name}
              onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
              className="w-full border dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              value={customerInfo.email}
              onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
              className="w-full border dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
            />
          </div>
        </div>

        {/* Order Items */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Order Items</h4>
          <div className="space-y-4">
            {orderItems.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center gap-4 p-4 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
              >
                <img src={item.image} alt={item.title} className="w-16 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h5 className="font-medium text-gray-900 dark:text-gray-100">{item.title}</h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">ID: {item.id}</p>
                  <p className="text-sm text-gray-900 dark:text-gray-100">${item.unitPrice.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-600 rounded text-gray-600 dark:text-gray-300"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center text-gray-900 dark:text-gray-100">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-600 rounded text-gray-600 dark:text-gray-300"
                  >
                    <Plus size={16} />
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="p-1.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-400/10 rounded ml-2"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="border-t dark:border-gray-600 pt-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
              <span className="text-gray-900 dark:text-gray-100">${totals.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">Tax</span>
              <span className="text-gray-900 dark:text-gray-100">${totals.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">Shipping</span>
              <span className="text-gray-900 dark:text-gray-100">${totals.shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg pt-4 border-t dark:border-gray-600">
              <span className="text-gray-900 dark:text-gray-100">Total</span>
              <span className="text-gray-900 dark:text-gray-100">${totals.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditOrderModal;