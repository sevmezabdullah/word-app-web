import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@mui/material';
import React from 'react';

const LogoutDialog = ({ isOpen, onClose, logout }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        <h5>Çıkış yapmak istediğinden emin misin ?</h5>
      </DialogTitle>
      <DialogContent>
        <p>Oturumunu sonlandırmak üzeresin. Çıkış yapmak istiyor musun ? </p>
      </DialogContent>
      <DialogActions>
        <button className="btn btn-danger" onClick={onClose}>
          Vazgeç
        </button>
        <button className="btn btn-success" onClick={logout}>
          Çıkış
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutDialog;
