import React from 'react';
import Sidebar from './Sidebar';
import UserMenu from './UserNav/UserMenu';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:ml-64">
        <header className="h-16 bg-white border-b border-gray-200 px-4 lg:px-8 flex items-center justify-between">
          {/* Mobile spacer for menu button */}
          <div className="w-8 h-8 lg:hidden" />
          <UserMenu />
        </header>
        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;