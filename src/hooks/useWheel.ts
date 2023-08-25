import {useState} from 'react';
import {Gesture} from 'react-native-gesture-handler';
import {
  useSharedValue,
  useAnimatedStyle,
  Easing,
  runOnJS,
  withTiming,
} from 'react-native-reanimated';

export const useWheel = () => {
  const easing = Easing.bezier(0.23, 1, 0.32, 1);
  const rotation = useSharedValue(0);
  const [currentAngle, setCurrentAngle] = useState(rotation.value);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `-${rotation.value}deg`}],
    };
  });

  const handleAngle = (value: number) => {
    setCurrentAngle(parseInt(value.toFixed(), 7));
  };

  const gesture = Gesture.Pan().onUpdate(e => {
    rotation.value = withTiming(
      e.velocityY > 0
        ? Math.abs(e.velocityY) / 7 + rotation.value
        : -Math.abs(e.velocityY) / 7 + rotation.value,
      {
        duration: 1000,
        easing: easing,
      },
      () => runOnJS(handleAngle)(rotation.value % 360),
    );
  });

  return {
    rotation,
    animatedStyles,
    gesture,
    currentAngle,
  };
};
