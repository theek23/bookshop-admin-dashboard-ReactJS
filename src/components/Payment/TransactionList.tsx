import React from 'react';
import { RefreshCcw } from 'lucide-react';
import { Transaction } from '../../types/payment';
import StatusBadge from '../Table/StatusBadge';

interface TransactionListProps {
  transactions: Transaction[];
  onRefund: (transaction: Transaction) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, onRefund }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left bg-gray-50 dark:bg-gray-900/50">
            <th className="px-6 py-3 text-gray-500 dark:text-gray-400 text-sm font-medium">Transaction ID</th>
            <th className="px-6 py-3 text-gray-500 dark:text-gray-400 text-sm font-medium">Order ID</th>
            <th className="px-6 py-3 text-gray-500 dark:text-gray-400 text-sm font-medium">Date</th>
            <th className="px-6 py-3 text-gray-500 dark:text-gray-400 text-sm font-medium">Customer</th>
            <th className="px-6 py-3 text-gray-500 dark:text-gray-400 text-sm font-medium">Amount</th>
            <th className="px-6 py-3 text-gray-500 dark:text-gray-400 text-sm font-medium">Status</th>
            <th className="px-6 py-3 text-gray-500 dark:text-gray-400 text-sm font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                {transaction.id}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                {transaction.orderId}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                {transaction.date}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                {transaction.customer}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                ${transaction.amount.toFixed(2)}
              </td>
              <td className="px-6 py-4">
                <StatusBadge status={transaction.status} />
              </td>
              <td className="px-6 py-4">
                {transaction.status === 'Completed' && (
                  <button
                    onClick={() => onRefund(transaction)}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1"
                  >
                    <RefreshCcw size={16} />
                    <span>Refund</span>
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;