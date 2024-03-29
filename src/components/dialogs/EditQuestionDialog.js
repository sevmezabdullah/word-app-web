import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

const EditQuestionDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog fullWidth open={isOpen} onClose={onClose}>
      <DialogTitle>Düzenle</DialogTitle>
      <DialogContent>
        <div style={{ overflowY: 'scroll' }}>
          <hr />
        </div>
        <div style={{ overflowY: 'scroll', height: '100px' }}></div>
      </DialogContent>
      <DialogActions>
        <button onClick={onClose} className="btn btn-danger">
          Vazgeç
        </button>
        <button className="btn btn-warning">Güncelle</button>
      </DialogActions>
    </Dialog>
  );
};

export default EditQuestionDialog;
