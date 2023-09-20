import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
import {ContadorScreen} from './src/screens/ContadorScreen';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
};
