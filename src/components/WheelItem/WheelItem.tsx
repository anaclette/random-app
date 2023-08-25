import colors from '@/utils/themes/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  currentItem: string;
}

export const WheelItem = ({currentItem}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current item: </Text>
      <View style={{...styles.itemBox, backgroundColor: currentItem}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  text: {
    color: colors.alabster,
    fontSize: 15,
  },
  itemBox: {
    width: 100,
    height: 20,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default WheelItem;
