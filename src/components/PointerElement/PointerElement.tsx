import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

export interface Pointer {
  visible: boolean;
  x: number;
  y: number;
}

interface Props {
  pointer: Animated.SharedValue<Pointer>;
  active: Animated.SharedValue<boolean>;
}

export const PointerElement = ({pointer, active}: Props) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: pointer.value.x},
      {translateY: pointer.value.y},
      {
        scale: (pointer.value.visible ? 1 : 0) * (active.value ? 1.3 : 1),
      },
    ],
    backgroundColor: active.value ? 'red' : 'blue',
  }));

  return <Animated.View style={[styles.pointer, animatedStyle]} />;
};

const styles = StyleSheet.create({
  pointer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    position: 'absolute',
    marginStart: -30,
    marginTop: -30,
  },
});
