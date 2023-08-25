import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '@/utils/themes/colors';
import Svg, {Path} from 'react-native-svg';
import Animated from 'react-native-reanimated';
import {GestureDetector} from 'react-native-gesture-handler';
import {
  getCoordinates,
  getCoordinatesPosition,
  getCurrentColor,
} from '@/utils/helpers/helperFunctions';
import {useWheel} from '@/hooks/useWheel';
import {WheelItem} from '../WheelItem';
import {wheelItems} from '@/utils/constants';

const getSlice = () => {
  const slicesAmount = 8;
  let slices = [];
  let paths = [];
  let totalPercent = 0;

  for (let i = 0; i < slicesAmount; i++) {
    slices.push({
      percent: 1 / slicesAmount,
      color: wheelItems[i].color || colors.alabster,
      name: wheelItems[i].item,
    });
  }

  paths = slices.map((slice, index) => {
    const {x: startX, y: startY} = getCoordinates(totalPercent);
    totalPercent += slice.percent;
    const {x: endX, y: endY} = getCoordinates(totalPercent);
    const {topPosition, leftPosition, rotateValue} =
      getCoordinatesPosition(index);
    const largeValue = slice.percent > 0.5 ? 1 : 0;

    const pathData = [
      `M ${startX} ${startY}`,
      `A 1 1 0 ${largeValue} 1 ${endX} ${endY}`,
      'L 0 0',
    ].join(' ');

    return (
      <React.Fragment key={pathData}>
        <Path d={pathData} fill={slice.color} />
        <Text
          style={{
            ...styles.optionText,
            top: topPosition,
            left: leftPosition,
            transform: [{rotate: `${rotateValue}deg`}],
          }}>
          {slice.name}
        </Text>
      </React.Fragment>
    );
  });

  return paths;
};

export const Wheel = () => {
  const {gesture, animatedStyles, currentAngle} = useWheel();

  const currentColor = getCurrentColor(currentAngle);

  return (
    <>
      <GestureDetector gesture={gesture}>
        <View style={styles.container}>
          <View style={styles.pointer} />
          <Animated.View style={[styles.circle, animatedStyles]}>
            <View style={[styles.container]}>
              <Svg
                style={styles.svg}
                height="200"
                width="200"
                viewBox="-1 -1 2 2">
                {getSlice()}
              </Svg>
            </View>
          </Animated.View>
        </View>
      </GestureDetector>
      {/* <WheelItem currentItem={currentColor} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointer: {
    width: 10,
    height: 30,
    position: 'absolute',
    top: -15,
    borderRadius: 10,
    backgroundColor: colors.alabster,
    zIndex: 1,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    overflow: 'hidden',
    borderColor: colors.alabster,
  },
  svg: {
    position: 'relative',
  },
  optionText: {
    position: 'absolute',
    zIndex: 2,
    fontSize: 15,
  },
});
