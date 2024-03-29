import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import CategoryDetailDialog from '../dialogs/CategoryDetailDialog';

const SupportedLanList = ({ langCodes, meanings }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={(e) => {
          setIsOpen(true);
          e.preventDefault();
        }}
        className="btn btn-success"
      >
        <Search />
      </button>
      <CategoryDetailDialog
        onClose={() => {
          setIsOpen(false);
        }}
        isOpen={isOpen}
        languages={langCodes}
        meanings={meanings}
      />
    </>
  );
};

export default SupportedLanList;
