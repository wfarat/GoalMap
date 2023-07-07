import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ImageScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default ImageScreen;
