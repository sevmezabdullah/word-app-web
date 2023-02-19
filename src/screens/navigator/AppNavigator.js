import Dashboard from '../home/Dashboard';
import Categories from '../home/Categories';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const AppNavigator = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
};

export default AppNavigator;
