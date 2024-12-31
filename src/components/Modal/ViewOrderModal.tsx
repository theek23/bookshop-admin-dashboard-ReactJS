import React, { useState } from 'react';
import Modal from './Modal';
import OrderHeader from './OrderDetails/OrderHeader';
import OrderItems from './OrderDetails/OrderItems';
import OrderSummary from './OrderDetails/OrderSummary';
import OrderActions from './OrderDetails/OrderActions';
import OrderAddress from './OrderDetails/OrderAddress';
import EditOrderModal from './EditOrderModal';
import { Order } from '../../types/order';

interface ViewOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: Order;
}

const ViewOrderModal: React.FC<ViewOrderModalProps> = ({ isOpen, onClose, order }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (updatedOrder: Order) => {
    console.log('Saving updated order:', updatedOrder);
    setIsEditModalOpen(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCancel = () => {
    console.log('Cancel order:', order.id);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="Order Details">
        <div className="space-y-6">
          <OrderHeader
            orderId={order.id}
            date={order.date}
            customer={order.customer}
            email={order.email}
          />
          
          <OrderItems items={order.items} />
          
          <OrderAddress address={order.shippingAddress} />
          
          <OrderSummary
            subtotal={order.subtotal}
            tax={order.tax}
            shipping={order.shipping}
            total={order.subtotal + order.tax + order.shipping}
          />
          
          <OrderActions
            onEdit={handleEdit}
            onPrint={handlePrint}
            onCancel={handleCancel}
          />
        </div>
      </Modal>

      <EditOrderModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        order={order}
        onSave={handleSaveEdit}
      />
    </>
  );
};

export default ViewOrderModal;