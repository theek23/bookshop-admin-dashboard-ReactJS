import React, { useState } from 'react';
import { Search, UserPlus } from 'lucide-react';
import DataTable from '../components/Table/DataTable';
import StatusBadge from '../components/Table/StatusBadge';
import TableActions from '../components/Table/TableActions';
import { mockUsers } from '../data/mockUsers';
import { User } from '../types/user';
import { useModal } from '../hooks/useModal';
import ViewUserDetailsModal from '../components/Modal/ViewUserDetailsModal';
import AddUserModal from '../components/User/AddUserModal';
import EditUserModal from '../components/Modal/EditUserModal';
import DeleteConfirmationModal from '../components/Modal/DeleteConfirmationModal';

const Users = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  
  const addModal = useModal();
  const viewModal = useModal();
  const editModal = useModal();
  const deleteModal = useModal();

  const handleAdd = (user: Omit<User, 'id' | 'lastLogin' | 'createdAt'>) => {
    const newUser: User = {
      id: Math.max(0, ...users.map(u => u.id)) + 1,
      lastLogin: '-',
      createdAt: new Date().toISOString().split('T')[0],
      ...user
    };
    setUsers(prev => [...prev, newUser]);
    addModal.closeModal();
  };

  const handleEdit = (user: User) => {
    setUsers(prev => prev.map(u => u.id === user.id ? user : u));
    editModal.closeModal();
  };

  const handleDelete = () => {
    if (selectedUser) {
      setUsers(prev => prev.filter(u => u.id !== selectedUser.id));
      deleteModal.closeModal();
    }
  };

  const columns = [
    {
      key: 'name',
      label: 'Name',
      render: (_: string, user: User) => (
        <div className="flex items-center gap-3">
          <img src={user.avatar} alt="" className="w-8 h-8 rounded-full" />
          <div>
            <div className="font-medium text-gray-900 dark:text-white">{user.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
          </div>
        </div>
      )
    },
    {
      key: 'role',
      label: 'Role',
      render: (role: string) => (
        <span className="capitalize text-gray-900 dark:text-white">
          {role.replace('_', ' ')}
        </span>
      )
    },
    {
      key: 'lastLogin',
      label: 'Last Login',
      render: (date: string) => (
        <span className="text-gray-600 dark:text-gray-300">{date}</span>
      )
    },
    {
      key: 'createdAt',
      label: 'Join Date',
      render: (date: string) => (
        <span className="text-gray-600 dark:text-gray-300">{date}</span>
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
      render: (_: any, user: User) => (
        <TableActions
          onView={() => {
            setSelectedUser(user);
            viewModal.openModal();
          }}
          onEdit={() => {
            setSelectedUser(user);
            editModal.openModal();
          }}
          onDelete={() => {
            setSelectedUser(user);
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
          Users
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Manage system users and their permissions
        </p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search users..."
            className="pl-10 pr-4 py-2 border dark:border-gray-700 rounded-lg w-full sm:w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
        <button
          onClick={addModal.openModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <UserPlus size={20} />
          Add User
        </button>
      </div>

      <DataTable 
        columns={columns} 
        data={users} 
        itemsPerPage={5}
      />

      <AddUserModal
        isOpen={addModal.isOpen}
        onClose={addModal.closeModal}
        onAdd={handleAdd}
      />

      {selectedUser && (
        <>
          <ViewUserDetailsModal
            isOpen={viewModal.isOpen}
            onClose={viewModal.closeModal}
            user={selectedUser}
            onEdit={() => {
              viewModal.closeModal();
              editModal.openModal();
            }}
          />
          <EditUserModal
            isOpen={editModal.isOpen}
            onClose={editModal.closeModal}
            onSave={handleEdit}
            user={selectedUser}
          />
          <DeleteConfirmationModal
            isOpen={deleteModal.isOpen}
            onClose={deleteModal.closeModal}
            onConfirm={handleDelete}
            itemName={selectedUser.name}
          />
        </>
      )}
    </div>
  );
};

export default Users;