import { useEffect, useState } from 'react';
import AppNavigator from './screens/navigator/AppNavigator';
import AuthNavigator from './screens/navigator/AuthNavigator';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [token, setToken] = useState('');
  useEffect(() => {
    async function checkToken() {
      const localToken = await localStorage.getItem('token');
      if (localToken) setToken(localToken);
      else setToken(null);
    }

    checkToken();
  }, []);

  if (token === null) {
    return <AuthNavigator />;
  } else {
    return <AppNavigator />;
  }
}

export default App;
