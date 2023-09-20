import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

export const DimensionesScreen = () => {
  //const {width, height} = Dimensions.get('window');
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.cajaMorada,
            width: width * 0.5,
          }}
        />
        <View style={styles.cajaNaranja} />
      </View>
      <Text>
        {width}, {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'gray',
    height: 200,
  },
  cajaMorada: {
    width: '50%',
    height: '50%',
    backgroundColor: 'purple',
  },
  cajaNaranja: {
    width: '50%',
    height: '50%',
    backgroundColor: 'orange',
  },
});
