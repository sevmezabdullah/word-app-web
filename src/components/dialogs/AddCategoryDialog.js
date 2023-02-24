import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import AddRemoveInputField from '../ui/AddRemoveInputField';
import { useDispatch } from 'react-redux';
import { postCategory } from '../../redux/slicer/category';

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
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleAwardId = (e) => {
    setAwardId(e.target.value);
  };

  const imageHandler = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const clearForm = () => {
    setAwardId('');
    setInputFields([
      {
        langCode: '',
      },
    ]);
    setImage(null);
  };
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Kategori Oluştur</DialogTitle>
      <DialogContent>
        <div className="container">
          <div className="form-group">
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Resim
              </label>
              <input
                onChange={imageHandler}
                className="form-control"
                type="file"
                id="image"
              />
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
            console.log('inputs : ', inputFields);
            const category = {
              titles: inputFields,
              awardId: awardId,
              logo: image,
            };
            dispatch(postCategory(category));
            clearForm();
            onClose();
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
