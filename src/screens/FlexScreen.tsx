import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#108023',
    flexDirection: 'row',
    alignItems:'flex-end',
    justifyContent:'flex-end',
  },
  caja1: {
    borderColor: 'white',
    borderWidth: 5,
    fontSize: 25,
    color: 'white',
    //flex: 1,
    textAlign: 'center',
  },
  caja2: {
    borderColor: 'white',
    borderWidth: 5,
    fontSize: 25,
    color: 'white',
    //flex: 3,
    textAlign: 'center',
  },
  caja3: {
    borderColor: 'white',
    borderWidth: 5,
    fontSize: 25,
    color: 'white',
    //flex: 2,
    textAlign: 'center',
  },
});
