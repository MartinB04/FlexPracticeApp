import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
import {ContadorScreen} from './src/screens/ContadorScreen';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PosicionScreen } from './src/screens/PosicionScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <PosicionScreen />
    </SafeAreaView>
  );
};
