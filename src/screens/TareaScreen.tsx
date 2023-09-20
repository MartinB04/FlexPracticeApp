import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37d47e',

    flexDirection: 'column',
  },
  cajaMorada: {
    flex: 2.5,
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: 'purple',
  },
  cajaNaranja: {
    flex: 2.5,
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: 'orange',
  },
  cajaAzul: {
    flex: 5,
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: 'blue',
  },
});
