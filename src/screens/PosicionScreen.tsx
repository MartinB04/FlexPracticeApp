import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PosicionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaAzul} />
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
    backgroundColor: 'green',
  },
  cajaMorada: {
    width: 50,
    height: 50,
    backgroundColor: 'purple',
    borderWidth: 5,
    borderColor: 'white',
    right: 0,
    position: 'absolute',
  },
  cajaNaranja: {
    width: 50,
    height: 50,
    backgroundColor: 'orange',
    borderWidth: 5,
    borderColor: 'black',
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  cajaAzul: {
    //width: 50,
    //height: 50,
    backgroundColor: 'blue',
    borderWidth: 5,
    borderColor: 'black',
    // hace top, bottom, right y left 0 ademas position absolute Bv
    //deestructura de styleSheet Bv
    ...StyleSheet.absoluteFillObject, 
  },
});
