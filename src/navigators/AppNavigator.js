import React from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {useAuth} from '../contexts/AuthProvider';

const AppNavigator = () => {
  const {user} = useAuth();

  return (
    <React.Fragment>
      {user !== null ? <AppStack /> : <AuthStack />}
    </React.Fragment>
  );
};

export default AppNavigator;
