import React from 'react';

interface MobileOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileOverlay: React.FC<MobileOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/20 lg:hidden z-30 backdrop-blur-sm"
      onClick={onClose}
    />
  );
};

export default MobileOverlay;