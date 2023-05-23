import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
const CategoryDetailDialog = ({ isOpen, onClose, languages, meanings }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Desteklenen Diller</DialogTitle>
      <DialogContent>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Dil</th>
              <th scope="col">Anlam</th>
            </tr>
          </thead>
          <tbody>
            {languages.map((language, index) => (
              <tr key={index}>
                <td>{language}</td>
                <td>{meanings[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul className="list-group"></ul>
      </DialogContent>
      <DialogActions>
        <button onClick={onClose} className="btn btn-danger">
          Kapat
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default CategoryDetailDialog;
