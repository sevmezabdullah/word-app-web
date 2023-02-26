import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import AddRemoveInputField from '../ui/AddRemoveInputFieldWord';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postWord } from '../../redux/slicer/words';
const placeHoldersWord = {
  key: 'Dil Kodu',
  value: 'Kelime',
};

const placeHolderSentences = {
  key: 'Dil Kodu',
  value: 'Cümle',
};
const AddWordDialog = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

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
      <DialogTitle>Kelime Ekle</DialogTitle>
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
        <button
          onClick={() => {
            dispatch(postWord({ words: words, sentences: sentences }));
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
            onClose();
          }}
          className="btn btn-success"
        >
          Oluştur
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default AddWordDialog;
