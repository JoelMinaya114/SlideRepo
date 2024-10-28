import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Travel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Travel Page!</Text>
      {/* Add content for Travel Page */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Travel;
