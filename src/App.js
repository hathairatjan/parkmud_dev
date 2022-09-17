import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import AppNavigator from './navigators/AppNavigator';
import {LogBox} from 'react-native';
import AuthProvider from './contexts/AuthProvider';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
