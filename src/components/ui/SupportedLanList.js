import React from 'react';
import { Search } from '@mui/icons-material';

const SupportedLanList = ({ langCodes }) => {
  return (
    <button className="btn btn-success">
      <Search />
    </button>
  );
};

export default SupportedLanList;
