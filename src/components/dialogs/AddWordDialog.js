import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import AddRemoveInputField from '../ui/AddRemoveInputFieldWord';
import { useState } from 'react';
const placeHoldersWord = {
  key: 'Dil Kodu',
  value: 'Kelime',
};

const placeHolderSentences = {
  key: 'Dil Kodu',
  value: 'Cümle',
};
const AddWordDialog = ({ isOpen, onClose }) => {
  const [words, setWords] = useState([
    {
      langCode: '',
    },
  ]);

  const [sentences, setSentences] = useState([
    {
      langCode: '',
    },
  ]);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        <h5>Kelime Ekle</h5>
      </DialogTitle>
      <DialogContent>
        <div>
          <h6>Kelimeler</h6>
          <AddRemoveInputField
            placeHolders={placeHoldersWord}
            inputFields={words}
            setInputFields={setWords}
          />
          <AddRemoveInputField
            placeHolders={placeHolderSentences}
            inputFields={sentences}
            setInputFields={setSentences}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <button
          onClick={() => {
            onClose();
            setWords([
              {
                langCode: '',
              },
            ]);
            setSentences([
              {
                langCode: '',
              },
            ]);
          }}
          className="btn btn-danger"
        >
          Vazgeç
        </button>
        <button className="btn btn-success">Oluştur</button>
      </DialogActions>
    </Dialog>
  );
};

export default AddWordDialog;
