import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
const CategoryDetailDialog = ({ isOpen, onClose, languages }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        <h5>Desteklenen Diller</h5>
      </DialogTitle>
      <DialogContent>
        <ul className="list-group">
          {languages.map((language) => (
            <li className="list-group-item">{language}</li>
          ))}
        </ul>
      </DialogContent>
      <DialogActions>
        <button onClick={onClose} className="btn btn-danger">
          Kapat
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default CategoryDetailDialog;
