import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import DraggablePhotoContainer from './components/draggablePhoto';  // Adjust the import path accordingly

export default function App() {
  return (
    <View style={styles.container}>
      <DraggablePhotoContainer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
