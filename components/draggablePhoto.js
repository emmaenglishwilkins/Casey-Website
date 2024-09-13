import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Draggable from 'react-native-draggable';

const DraggablePhoto = ({ source, initialX, initialY, isActive, onSelect, onRelease }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseUp = () => {
    if (isActive && isDragging) {
      onRelease();
      setIsDragging(false);
    }
  };

  useEffect(() => {
    // Listen for mouseup event to release the photo when the mouse button is released
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isActive, isDragging, onRelease]);

  return (
    <Draggable
      x={position.x}
      y={position.y}
      onDragRelease={(event, gestureState, bounds) => {
        setPosition({ x: bounds.left, y: bounds.top });
        setIsDragging(false); // Set dragging to false when released
      }}
      onPressIn={() => {
        onSelect(); // Select the photo on press
        setIsDragging(true); // Set dragging to true when pressed
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
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

// Export the DraggablePhoto component
export default DraggablePhoto;
