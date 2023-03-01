import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React from 'react';

const AddQuestionDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        <h5>Soru Oluştur</h5>
      </DialogTitle>
      <DialogContent>
        <div>
          <h6>Zorluk</h6>
          <select className="form-select" aria-label="Default select example">
            <option selected value="kolay">
              Kolay
            </option>
            <option value="orta">Orta</option>
            <option value="zor">Zor</option>
          </select>
          <h6>Soru</h6>
          <input type="text" className="form-control" />
          <h6>Cevap A</h6>
          <input type="text" className="form-control" />
          <h6>Cevap B</h6>
          <input type="text" className="form-control" />
          <h6>Cevap C</h6>
          <input type="text" className="form-control" />
          <h6>Cevap D</h6>
          <input type="text" className="form-control" />

          <h6>Doğru Cevap</h6>
          <ul className="list-group" style={{}}>
            <li className="list-group-item">
              A <input type="radio" name="A" id="A" />
            </li>
            <li className="list-group-item">
              B <input type="radio" name="A" id="A" />
            </li>
            <li className="list-group-item">
              C <input type="radio" name="A" id="A" />
            </li>
            <li className="list-group-item">
              D <input type="radio" name="A" id="A" />
            </li>
          </ul>
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

export default AddQuestionDialog;
