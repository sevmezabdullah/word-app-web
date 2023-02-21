import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import AddRemoveInputField from '../ui/AddRemoveInputField';

const AddCategoryDialog = ({ isOpen, onClose }) => {
  const [inputFields, setInputFields] = useState([
    {
      langCode: '',
    },
  ]);
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        <h5>Kategori Oluştur</h5>
      </DialogTitle>
      <DialogContent>
        <div className="container">
          <div className="form-group">
            <input
              placeholder="Kazanım ID "
              type="text"
              className="form-control"
            />
          </div>
        </div>

        <AddRemoveInputField
          inputFields={inputFields}
          setInputFields={setInputFields}
        />
      </DialogContent>
      <DialogActions>
        <button onClick={onClose} className="btn btn-danger">
          Kapat
        </button>
        <button
          onClick={() => {
            console.log(inputFields);
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
