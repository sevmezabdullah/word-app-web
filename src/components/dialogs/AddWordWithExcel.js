import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import * as XLSX from 'xlsx';
import { useState } from 'react';
const AddWordWithExcel = ({ isOpen, onClose }) => {
  const [items, setItems] = useState([]);
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: 'buffer' });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });

    let mergeObject = {};

    items.forEach((item) => {
      mergeObject += item;
    });
    console.log(mergeObject);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Excel Yükle</DialogTitle>
      <DialogContent>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            console.log(items);
            readExcel(file);
          }}
        />
      </DialogContent>
      <DialogActions>
        <button onClick={onClose} className="btn btn-danger">
          Vazgeç
        </button>
        <button className="btn btn-success">Yükle</button>
      </DialogActions>
    </Dialog>
  );
};

export default AddWordWithExcel;
