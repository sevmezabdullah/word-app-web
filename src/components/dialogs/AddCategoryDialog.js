import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import AddRemoveInputField from '../ui/AddRemoveInputField';

const placeholders = {
  key: 'Dil Kodu',
  value: 'Anlamı',
};
const AddCategoryDialog = ({ isOpen, onClose }) => {
  const [inputFields, setInputFields] = useState([
    {
      langCode: '',
    },
  ]);
  const [awardId, setAwardId] = useState('');

  const handleAwardId = (e) => {
    setAwardId(e.target.value);
  };

  const clearForm = () => {
    setAwardId('');
    setInputFields([
      {
        langCode: '',
      },
    ]);
  };
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        <h5>Kategori Oluştur</h5>
      </DialogTitle>
      <DialogContent>
        <div className="container">
          <div className="form-group">
            <div class="mb-3">
              <label for="formFile" class="form-label">
                Resim
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>
            <input
              placeholder="Kazanım ID "
              type="text"
              className="form-control"
              value={awardId}
              onChange={handleAwardId}
            />
          </div>
        </div>

        <AddRemoveInputField
          placeHolders={placeholders}
          inputFields={inputFields}
          setInputFields={setInputFields}
        />
      </DialogContent>
      <DialogActions>
        <button
          onClick={() => {
            onClose();
            clearForm();
          }}
          className="btn btn-danger"
        >
          Kapat
        </button>
        <button
          onClick={() => {
            console.log(inputFields);
            clearForm();
          }}
          className="btn btn-success"
        >
          Onayla
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCategoryDialog;
