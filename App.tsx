import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from './src/routes';
import { AppProvider } from './src/hooks';

const App: React.FC = () => {
  return (
    <AppProvider>
      <StatusBar hidden />
      <Routes />
    </AppProvider>
  );
};

export default App;
