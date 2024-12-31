import React from 'react';
import TableHeader from './TableHeader';
import Pagination from '../Pagination';
import { usePagination } from '../../hooks/usePagination';

interface Column<T> {
  key: keyof T | 'actions';
  label: string;
  render?: (value: any, item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  itemsPerPage?: number;
}

const DataTable = <T extends Record<string, any>>({ 
  columns, 
  data, 
  itemsPerPage = 10 
}: DataTableProps<T>) => {
  const { currentPage, totalPages, paginatedData, handlePageChange } = usePagination({
    data,
    itemsPerPage,
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="overflow-x-auto">
        <table className="w-full">
          <TableHeader columns={columns} />
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
                {columns.map((column) => (
                  <td key={column.key.toString()} className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                    {column.render 
                      ? column.render(item[column.key], item)
                      : item[column.key]
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default DataTable;