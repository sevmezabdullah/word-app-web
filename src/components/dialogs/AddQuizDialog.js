import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
const AddQuizDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        <h5>Quiz Hazırla</h5>
      </DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <button onClick={onClose} className="btn btn-danger">
          Vazgeç
        </button>
        <button className="btn btn-success">Oluştur</button>
      </DialogActions>
    </Dialog>
  );
};

export default AddQuizDialog;
