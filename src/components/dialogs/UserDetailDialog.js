import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
const UserDetailDialog = ({ isOpen, onClose, user }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Kullanıcı Detayları</DialogTitle>
      <DialogContent>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Tamamladığı Quiz Sayısı</th>
              <th>Toplam Doğru</th>
              <th>Toplam Yanlış</th>
              <th>Bilinen Kelime Sayısı Sayısı</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.completedQuiz.length}</td>

              <td></td>
              <td></td>
              <td>{user.knownWords.length}</td>
            </tr>
          </tbody>
        </table>
      </DialogContent>
      <DialogActions>
        <button onClick={onClose} className="btn btn-danger">
          Kapat
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDetailDialog;
