import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import pic1 from './pictures/pic1.png';
import pic2 from './pictures/pic2.png';

const Home = () => {
  
  const [pic1Position, setPic1Position] = useState({ x: 0, y: 0 });
  const [pic2Position, setPic2Position] = useState({ x: 0, y: 0 });

  const handleGesture = ({ nativeEvent }) => {
    const { translationX, translationY, state } = nativeEvent;

    if (state === State.ACTIVE) {
      // Update the position of the photo based on the gesture translation
      setPic1Position(prevPosition => ({
        x: prevPosition.x + translationX,
        y: prevPosition.y + translationY,
      }));
    }
  };

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={handleGesture}>
        <View style={[styles.imageContainer, { left: pic1Position.x, top: pic1Position.y }]}>
          <Image source={pic1} style={styles.image} />
        </View>
      </PanGestureHandler>
      <PanGestureHandler onGestureEvent={handleGesture}>
        <View style={[styles.imageContainer, { left: pic2Position.x, top: pic2Position.y }]}>
          <Image source={pic2} style={styles.image} />
        </View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'absolute',
    width: 150,
    height: 150,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Home;
