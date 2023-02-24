import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

const WordDetailDialog = ({ isOpen, onClose, selectedWord }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Kelime Detayı</DialogTitle>
      <DialogContent>
        <></>
      </DialogContent>
      <DialogActions>
        <button className="btn btn-danger" onClick={onClose}>
          Kapat
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default WordDetailDialog;
