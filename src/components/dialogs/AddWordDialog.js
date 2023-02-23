import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import AddRemoveInputField from '../ui/AddRemoveInputFieldWord';
import { useState } from 'react';

const AddWordDialog = ({ isOpen, onClose }) => {
  const [words, setWords] = useState([
    {
      langCode: '',
    },
  ]);
  const placeHolders = {
    key: 'Dil Kodu',
    value: 'Kelime',
  };
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        <h5>Kelime Ekle</h5>
      </DialogTitle>
      <DialogContent>
        <div>
          <h6>Kelimeler</h6>
          <AddRemoveInputField
            placeHolders={placeHolders}
            inputFields={words}
            setInputFields={setWords}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <button onClick={onClose} className="btn btn-danger">
          Vazgeç
        </button>
        <button className="btn btn-success">Oluştur</button>
      </DialogActions>
    </Dialog>
  );
};

export default AddWordDialog;
