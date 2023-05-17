import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

const EditWordDialog = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const selectedWord = useSelector((state) => state.words.selectedWord);

  return (
    <Dialog fullWidth open={isOpen} onClose={onClose}>
      <DialogTitle>Düzenle</DialogTitle>
      <DialogContent>
        <div style={{ overflowY: 'scroll' }}>
          {selectedWord.words.map((item, index) => {
            return (
              <div style={{ marginTop: '5px' }}>
                <div style={{ display: 'inline' }}>
                  <input
                    placeholder={item.meaning}
                    className="form-control"
                    type="text"
                    onChange={(e) => {}}
                  />
                </div>
              </div>
            );
          })}
          <hr />
        </div>
        <div style={{ overflowY: 'scroll', height: '100px' }}>
          {selectedWord.sentences.map((item, index) => {
            return (
              <div style={{ marginTop: '5px' }}>
                <div style={{ display: 'inline' }}>
                  <input
                    placeholder={item.meaning}
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
            );
          })}
        </div>
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

export default EditWordDialog;
