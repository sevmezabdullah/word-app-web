import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@mui/material';
import React from 'react';

const DeleteDialog = ({ isOpen, onClose, deleteFunction }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Silmek istediğinize emin misin ?</DialogTitle>
      <DialogContent>
        <p>Kaydı silmek istediğinden emin misin ?</p>
      </DialogContent>
      <DialogActions>
        <button className="btn btn-danger" onClick={onClose}>
          Vazgeç
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            deleteFunction();
            onClose();
          }}
        >
          Sil
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
