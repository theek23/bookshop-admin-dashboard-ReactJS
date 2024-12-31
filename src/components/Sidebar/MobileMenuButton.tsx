import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="lg:hidden fixed top-3 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700"
    >
      {isOpen ? (
        <X size={20} className="text-gray-600 dark:text-gray-300" />
      ) : (
        <Menu size={20} className="text-gray-600 dark:text-gray-300" />
      )}
    </button>
  );
};

export default MobileMenuButton;