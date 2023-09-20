import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titulo}>BoxObjectModelScreen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    paddingHorizontal: 40,
    paddingVertical:20,

  },
  titulo: {
    fontSize: 20,
    color: "white",
    textAlign: 'center',
    borderColor: "blue",
    borderWidth: 4,
    padding: 5
  },
});
