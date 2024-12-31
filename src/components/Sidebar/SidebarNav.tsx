import React from 'react';
import { useLocation } from 'react-router-dom';
import NavLink from './NavLink';
import { getNavItems } from './navItems';
import { useSettings } from '../../contexts/SettingsContext';

interface SidebarNavProps {
  onItemClick?: () => void;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ onItemClick }) => {
  const location = useLocation();
  const { settings } = useSettings();
  const navItems = getNavItems().map(item => 
    item.path === '/inventory' 
      ? { ...item, label: settings.inventoryTitle }
      : item
  );

  return (
    <nav className="flex-1 overflow-y-auto py-4 px-3">
      <ul className="space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            item={item}
            isActive={location.pathname === item.path}
            onClick={onItemClick}
          />
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;