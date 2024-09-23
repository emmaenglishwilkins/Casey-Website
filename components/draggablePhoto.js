import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Draggable from 'react-native-draggable';

const DraggablePhoto = ({ source, initialX, initialY }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });

  return (
    <Draggable
      x={position.x}
      y={position.y}
      onDragRelease={(event, gestureState, bounds) => {
        // Check if bounds is defined before accessing its properties
        if (bounds) {
          setPosition({ x: bounds.left, y: bounds.top });
        }
      }}
    >
      <View style={styles.imageContainer}>
        <Image source={source} style={styles.image} />
      </View>
    </Draggable>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 150,
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default DraggablePhoto;
