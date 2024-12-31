import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { User } from '../../types/user';
import UserForm from './UserForm';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (user: Omit<User, 'id' | 'lastLogin' | 'createdAt'>) => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [user, setUser] = useState<Omit<User, 'id' | 'lastLogin' | 'createdAt'>>({
    name: '',
    email: '',
    role: 'user',
    status: 'active',
    avatar: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(user);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New User">
      <UserForm
        user={user}
        onChange={setUser}
        onSubmit={handleSubmit}
        onCancel={onClose}
        submitLabel="Add User"
      />
    </Modal>
  );
};

export default AddUserModal;