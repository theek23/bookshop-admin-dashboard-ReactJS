import React from 'react';

interface Column {
  key: string;
  label: string;
}

interface TableHeaderProps {
  columns: Column[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead>
      <tr className="text-left bg-gray-50 dark:bg-gray-900/50">
        {columns.map((column) => (
          <th key={column.key} className="px-6 py-3 text-gray-500 dark:text-gray-400 text-sm font-medium">
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;