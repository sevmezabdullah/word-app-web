import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/slicer/user';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
const Navigator = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (user === null) {
    return <AuthNavigator />;
  } else {
    return <AppNavigator />;
  }
};

export default Navigator;
