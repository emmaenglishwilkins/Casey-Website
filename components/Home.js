// import React, { useState } from 'react';
// import { View, Image, StyleSheet } from 'react-native';
// import { PanGestureHandler, State } from 'react-native-gesture-handler';

// import pic1 from './pictures/pic1.png';
// import pic2 from './pictures/pic2.png';

// const Home = () => {
//   const [activeImage, setActiveImage] = useState(null);
//   const [positions, setPositions] = useState({
//     pic1: { x: 0, y: 0 },
//     pic2: { x: 0, y: 0 },
//   });

//   const handleGesture = (imageKey) => ({ nativeEvent }) => {
//     const { translationX, translationY, state } = nativeEvent;

//     if (state === State.ACTIVE) {
//       setActiveImage(imageKey);
//       setPositions(prevPositions => ({
//         ...prevPositions,
//         [imageKey]: {
//           x: prevPositions[imageKey].x + translationX,
//           y: prevPositions[imageKey].y + translationY,
//         },
//       }));
//     } else if (state === State.END) {
//       setActiveImage(null); // Reset active image on gesture end
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <PanGestureHandler onGestureEvent={handleGesture('pic1')} onHandlerStateChange={handleGesture('pic1')}>
//         <View style={[styles.imageContainer, { left: positions.pic1.x, top: positions.pic1.y }]}>
//           <Image source={pic1} style={styles.image} />
//         </View>
//       </PanGestureHandler>
//       <PanGestureHandler onGestureEvent={handleGesture('pic2')} onHandlerStateChange={handleGesture('pic2')}>
//         <View style={[styles.imageContainer, { left: positions.pic2.x, top: positions.pic2.y }]}>
//           <Image source={pic2} style={styles.image} />
//         </View>
//       </PanGestureHandler>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     position: 'absolute',
//     width: 150,
//     height: 150,
//     marginVertical: 10,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
// });

// export default Home;
