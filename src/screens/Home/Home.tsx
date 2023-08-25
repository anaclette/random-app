import React from 'react';
import colors from '@/utils/themes/colors';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SharedTransition, withSpring} from 'react-native-reanimated';
import {Wheel} from '@/components';

interface Props {
  onPress: () => void;
}
export const customTransition = SharedTransition.custom(values => {
  'worklet';
  return {
    height: withSpring(values.targetHeight),
    width: withSpring(values.targetWidth),
    originX: withSpring(values.targetOriginX),
    originY: withSpring(values.targetOriginY),
  };
});

const RandomButton = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>Random</Text>
    </TouchableOpacity>
  );
};

export const HomeScreen = () => {
  // const handlePress = () => {
  //   setShouldAnimate(true);
  // };
  return (
    <View style={styles.container}>
      <Wheel />
      <RandomButton onPress={() => undefined} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.midnightGreen,
  },
  button: {
    top: 0,
    position: 'absolute',
    right: 0,
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderColor: colors.alabster,
    borderWidth: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '15%',
    height: '100%',
  },
  text: {
    marginHorizontal: '30%',
    textAlign: 'center',
    fontSize: 25,
    color: colors.alabster,
  },
});
