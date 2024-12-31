import React, { useState } from 'react';
import SidebarNav from './SidebarNav';
import SidebarHeader from './SidebarHeader';
import SidebarFooter from './SidebarFooter';
import MobileMenuButton from './MobileMenuButton';
import MobileOverlay from './MobileOverlay';

const Sidebar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <MobileMenuButton 
        isOpen={isMobileMenuOpen} 
        onClick={toggleMobileMenu} 
      />

      <aside className={`
        fixed top-0 left-0 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 w-64
        lg:translate-x-0 transition-all duration-200 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:block z-40
      `}>
        <SidebarHeader />
        
        <div className="flex flex-col h-[calc(100vh-4rem)]">
          <SidebarNav onItemClick={() => setIsMobileMenuOpen(false)} />
          <SidebarFooter />
        </div>
      </aside>

      <MobileOverlay 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Sidebar;