import React from 'react';
import DataTable from '../Table/DataTable';
import TableActions from '../Table/TableActions';
import { Category } from '../../types/category';

interface CategoryListProps {
  categories: Category[];
  onView: (category: Category) => void;
  onEdit: (category: Category) => void;
  onDelete: (category: Category) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  onView,
  onEdit,
  onDelete,
}) => {
  const columns = [
    {
      key: 'name',
      label: 'Name',
      render: (value: string) => (
        <div className="font-medium text-gray-900 dark:text-white">{value}</div>
      )
    },
    {
      key: 'description',
      label: 'Description',
      render: (value: string) => (
        <div className="text-gray-600 dark:text-gray-300">{value}</div>
      )
    },
    {
      key: 'booksCount',
      label: 'Books',
      render: (value: number) => (
        <div className="text-gray-900 dark:text-white">{value}</div>
      )
    },
    {
      key: 'createdAt',
      label: 'Created',
      render: (value: string) => (
        <div className="text-gray-600 dark:text-gray-300">{value}</div>
      )
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_: any, category: Category) => (
        <TableActions
          onView={() => onView(category)}
          onEdit={() => onEdit(category)}
          onDelete={() => onDelete(category)}
        />
      )
    }
  ] as const;

  return <DataTable columns={columns} data={categories} />;
};

export default CategoryList;