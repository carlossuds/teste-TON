import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar hidden />
      <Routes />
    </>
  );
};

export default App;
