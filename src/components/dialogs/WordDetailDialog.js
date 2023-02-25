import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

const WordDetailDialog = ({ isOpen, onClose, selectedWord }) => {
  if (selectedWord !== null) {
    return (
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Kelime Detayı</DialogTitle>
        <DialogContent>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Kelime</th>
                  <th>Anlamı</th>
                </tr>
              </thead>

              <tbody>
                {selectedWord.words.map((word, index) => {
                  return (
                    <tr key={index}>
                      <td>{word.langCode}</td>
                      <td>{word.meaning}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <table className="table">
              <thead>
                <tr>
                  <th>Cümle</th>
                  <th>Anlamı</th>
                </tr>
              </thead>

              <tbody>
                {selectedWord.sentences.map((sentence, index) => {
                  return (
                    <tr key={index}>
                      <td>{sentence.langCode}</td>
                      <td>{sentence.meaning}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </DialogContent>
        <DialogActions>
          <button className="btn btn-danger" onClick={onClose}>
            Kapat
          </button>
        </DialogActions>
      </Dialog>
    );
  }
};

export default WordDetailDialog;
