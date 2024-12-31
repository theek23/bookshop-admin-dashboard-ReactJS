import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { Transaction } from '../../types/payment';
import { useCurrency } from '../../utils/currency';

interface RefundModalProps {
  isOpen: boolean;
  onClose: () => void;
  transaction: Transaction;
  onRefund: (transactionId: string, amount: number, reason: string) => void;
}

const RefundModal: React.FC<RefundModalProps> = ({ isOpen, onClose, transaction, onRefund }) => {
  const { format } = useCurrency();
  const [amount, setAmount] = useState(transaction.amount);
  const [reason, setReason] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRefund(transaction.id, amount, reason);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Process Refund">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-400">Order ID</span>
              <span className="text-gray-900 dark:text-white font-medium">{transaction.orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Original Amount</span>
              <span className="text-gray-900 dark:text-white font-medium">
                {format(transaction.amount)}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Refund Amount
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Math.min(transaction.amount, Math.max(0, Number(e.target.value))))}
                  step="0.01"
                  max={transaction.amount}
                  className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 dark:text-gray-400">
                  Max: {format(transaction.amount)}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Reason for Refund
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
                className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Please provide a reason for the refund..."
                required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Process Refund
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default RefundModal;