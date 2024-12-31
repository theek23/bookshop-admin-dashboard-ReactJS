import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from './types';

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ item, isActive, onClick }) => {
  return (
    <li>
      <Link
        to={item.path}
        onClick={onClick}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
          isActive
            ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
        }`}
      >
        <item.icon size={18} className="flex-shrink-0" />
        <span className="truncate">{item.label}</span>
      </Link>
    </li>
  );
};

export default NavLink;