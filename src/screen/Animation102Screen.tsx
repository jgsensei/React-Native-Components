import {View, StyleSheet, Animated, PanResponder} from 'react-native';
import React, {useRef} from 'react';

export const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
    

    const panResponders = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],{
        useNativeDriver: false
      }),
      onPanResponderRelease: () => {
        Animated.spring(
          pan, // Auto-multiplexed
          {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
        ).start();
      },
    });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponders.panHandlers}
        style={[pan.getLayout(), styles.purpleBox]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#970BC2',
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
