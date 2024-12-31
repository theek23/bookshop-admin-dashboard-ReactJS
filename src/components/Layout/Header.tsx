import React from 'react';
import UserMenu from '../UserNav/UserMenu';

const Header: React.FC = () => {
  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 lg:px-8 flex items-center justify-end">
      <UserMenu />
    </header>
  );
};

export default Header;