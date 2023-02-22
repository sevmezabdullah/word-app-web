import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slicer/user';
import { changePage } from '../../redux/slicer/pageManager';
import { useEffect, useState } from 'react';
import LogoutDialog from '../dialogs/LogoutDialog';
const Navbar = () => {
  const dispatch = useDispatch();
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  useEffect(() => {}, [dispatch]);
  const changePageOnDashboard = (e, index) => {
    e.preventDefault();
    dispatch(changePage({ currentIndex: index }));
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a
        className="navbar-brand"
        onClick={(e) => {
          changePageOnDashboard(e, 0);
        }}
        href="/"
      >
        Word App
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <a
              onClick={(e) => {
                changePageOnDashboard(e, 0);
              }}
              className="nav-link"
              href="/"
            >
              Anasayfa
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={(e) => {
                changePageOnDashboard(e, 1);
              }}
              href="/"
            >
              Kategoriler
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link "
              onClick={(e) => {
                changePageOnDashboard(e, 2);
              }}
              href="/"
            >
              Kullanıcılar
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link "
              onClick={(e) => {
                changePageOnDashboard(e, 3);
              }}
              href="/"
            >
              Kelimeler
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link "
              onClick={(e) => {
                changePageOnDashboard(e, 4);
              }}
              href="/"
            >
              Quizler
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link "
              onClick={(e) => {
                changePageOnDashboard(e, 5);
              }}
              href="/"
            >
              Sorular
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link "
              onClick={(e) => {
                e.preventDefault();
                setIsLogoutDialogOpen(true);
              }}
              href="/"
            >
              Çıkış
            </a>
          </li>
        </ul>
      </div>
      <LogoutDialog
        isOpen={isLogoutDialogOpen}
        onClose={() => {
          setIsLogoutDialogOpen(false);
        }}
        logout={(e) => {
          dispatch(logout());
        }}
      />
    </nav>
  );
};

export default Navbar;
