import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import StackNavigation from './src/navigation/stack-navigation/StackNavigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <StackNavigation />
    </View>
  );
};

export default App;
