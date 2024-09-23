import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import DraggablePhoto from './components/draggablePhoto'; // Ensure the correct path

import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.png';
import pic3 from './assets/pic3.png';
import pic4 from './assets/pic4.png';
import pic5 from './assets/pic5.png';
import pic6 from './assets/pic6.png';
import pic7 from './assets/pic7.png';
import pic8 from './assets/pic8.png';
import pic9 from './assets/pic9.png';
import pic10 from './assets/pic10.png';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <DraggablePhoto source={pic1} initialX={425} initialY={100} /> 
        <DraggablePhoto source={pic2} initialX={300} initialY={200} /> 
        <DraggablePhoto source={pic3} initialX={300} initialY={300} /> 
        <DraggablePhoto source={pic4} initialX={400} initialY={400} /> 
        <DraggablePhoto source={pic5} initialX={500} initialY={500} />
        <DraggablePhoto source={pic6} initialX={300} initialY={600} /> 
        <DraggablePhoto source={pic7} initialX={350} initialY={620} />
        <DraggablePhoto source={pic8} initialX={300} initialY={500} />
        <DraggablePhoto source={pic9} initialX={330} initialY={250} />
        <DraggablePhoto source={pic10} initialX={450} initialY={420} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the SafeAreaView fills the screen
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: 1024, // Set width to 1024 pixels
    height: 768, // Set height to 768 pixels
    backgroundColor: '#3498db', // Change this to your desired solid color
    alignItems: 'center',
    justifyContent: 'center',
  },
});
