import React, { useState } from 'react';
import TransactionList from '../components/Payment/TransactionList';
import RefundModal from '../components/Payment/RefundModal';
import { Transaction } from '../types/payment';
import { useModal } from '../hooks/useModal';

const Payments = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 'TXN-001',
      orderId: '#ORD-1234',
      date: '2024-02-20',
      customer: 'John Doe',
      amount: 299.99,
      status: 'Completed',
    },
    {
      id: 'TXN-002',
      orderId: '#ORD-1235',
      date: '2024-02-19',
      customer: 'Jane Smith',
      amount: 149.99,
      status: 'Processing',
    },
  ]);

  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const refundModal = useModal();

  const handleRefund = (transactionId: string, amount: number, reason: string) => {
    // In a real app, this would make an API call to process the refund
    console.log('Processing refund:', { transactionId, amount, reason });
    
    // Update the transaction status
    setTransactions(prev => 
      prev.map(t => 
        t.id === transactionId 
          ? { ...t, status: 'Refunded' as Transaction['status'] }
          : t
      )
    );
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Payments</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">View and manage payment transactions</p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Transactions</h2>
          <select className="border dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <option>All Transactions</option>
            <option>Completed</option>
            <option>Processing</option>
            <option>Refunded</option>
          </select>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <TransactionList 
            transactions={transactions}
            onRefund={(transaction) => {
              setSelectedTransaction(transaction);
              refundModal.openModal();
            }}
          />
        </div>
      </div>

      {selectedTransaction && (
        <RefundModal
          isOpen={refundModal.isOpen}
          onClose={refundModal.closeModal}
          transaction={selectedTransaction}
          onRefund={handleRefund}
        />
      )}
    </div>
  );
};

export default Payments;