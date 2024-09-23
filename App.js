import React from 'react';
import { View, StyleSheet } from 'react-native';
import DraggablePhotoContainer from './components/draggablePhoto'; // Correctly import the container

import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.png';
import pic3 from './assets/pic3.png';
import pic4 from './assets/pic4.png';
import pic5 from './assets/pic5.png';
import pic6 from './assets/pic6.png';
import DraggablePhoto from './components/draggablePhoto';

export default function App() {
  return (
    <View style={styles.container}>
      <DraggablePhoto source={pic1} initialX={100} initialY={200} />
      <DraggablePhoto source={pic2} initialX={200} initialY={300} />
      <DraggablePhoto source={pic3} initialX={300} initialY={400} />
      <DraggablePhoto source={pic4} initialX={400} initialY={500} />
      <DraggablePhoto source={pic5} initialX={500} initialY={600} />
      <DraggablePhoto source={pic6} initialX={0} initialY={500} />
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
