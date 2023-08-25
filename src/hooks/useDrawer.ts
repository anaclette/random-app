import {useDrawerProgress} from '@react-navigation/drawer';
import {useReducer} from 'react';
import {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

export const useDrawer = () => {
  const drawerProgress = useDrawerProgress();
  const [showSecondaryMenu, toggleSecondaryMenu] = useReducer(
    isShown => !isShown,
    false,
  );

  const animatedStyles = useAnimatedStyle(() => {
    const translateY = interpolate(drawerProgress.value, [0, 1], [-100, 0]);
    const opacity = interpolate(drawerProgress.value, [0, 1], [0, 1]);
    return {
      transform: [{translateY}],
      opacity,
    };
  });

  const progress = useDerivedValue(() => {
    return showSecondaryMenu ? withTiming(1) : withTiming(0);
  });

  const secondaryMenuStyle = useAnimatedStyle(() => {
    const scaleY = interpolate(progress.value, [0, 1], [0, 1]);
    return {
      transform: [{scaleY}],
    };
  });

  const scrollViewStyles = useAnimatedStyle(() => {
    const translateX = interpolate(drawerProgress.value, [0, 1], [-200, 0]);
    return {
      transform: [{translateX}],
    };
  });

  return {
    animatedStyles,
    scrollViewStyles,
    showSecondaryMenu,
    toggleSecondaryMenu,
    secondaryMenuStyle,
  };
};
