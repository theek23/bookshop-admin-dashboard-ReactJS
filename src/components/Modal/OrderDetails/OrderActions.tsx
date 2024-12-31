import React from 'react';
import { Printer, Edit, XCircle } from 'lucide-react';

interface OrderActionsProps {
  onEdit: () => void;
  onPrint: () => void;
  onCancel: () => void;
}

const OrderActions: React.FC<OrderActionsProps> = ({ onEdit, onPrint, onCancel }) => {
  return (
    <div className="mt-6 flex justify-end gap-4">
      <button
        onClick={onPrint}
        className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
      >
        <Printer size={18} />
        Print Invoice
      </button>
      <button
        onClick={onEdit}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        <Edit size={18} />
        Edit Order
      </button>
      <button
        onClick={onCancel}
        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        <XCircle size={18} />
        Cancel Order
      </button>
    </div>
  );
};

export default OrderActions;