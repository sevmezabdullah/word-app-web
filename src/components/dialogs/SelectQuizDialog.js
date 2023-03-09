import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const SelectQuizDialog = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Quiz Tanımla</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <button onClick={onClose} className="btn btn-success">
          Kapat
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default SelectQuizDialog;
