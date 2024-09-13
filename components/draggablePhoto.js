import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Draggable from 'react-native-draggable';

const DraggablePhoto = ({ source, initialX, initialY, isActive, onSelect }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });

  return (
    <Draggable
      x={position.x}
      y={position.y}
      onDragRelease={(event, gestureState, bounds) => {
        setPosition({ x: bounds.left, y: bounds.top });
      }}
      onPressIn={onSelect} // Select the photo on press
      onPressOut={() => onSelect(null)} // Reset active state when releasing
    >
      <View style={styles.imageContainer}>
        <Image source={source} style={styles.image} />
      </View>
    </Draggable>
  );
};

const DraggablePhotoContainer = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const photos = [
    { source: require('../assets/pic1.png'), initialX: -75, initialY: -150 }, // Centered
    { source: require('../assets/pic2.png'), initialX: -75, initialY: -75 },   // Centered
    { source: require('../assets/pic3.png'), initialX: -75, initialY: 0 },    // Centered
    { source: require('../assets/pic4.png'), initialX: -75, initialY: 75 },   // Centered
    { source: require('../assets/pic5.png'), initialX: -75, initialY: 150 },  // Centered
    { source: require('../assets/pic6.png'), initialX: -75, initialY: 225 },  // Centered
  ];

  const handleSelect = (index) => {
    setActiveIndex(index); // Set the active photo index
  };

  return (
    <View style={styles.container}>
      {photos.map((photo, index) => (
        <DraggablePhoto
          key={index}
          source={photo.source}
          initialX={photo.initialX}
          initialY={photo.initialY}
          isActive={activeIndex === index} // Check if this photo is active
          onSelect={() => handleSelect(index)} // Pass the select handler
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
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

// Export the new container component
export default DraggablePhotoContainer;
