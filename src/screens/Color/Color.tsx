import React from 'react';
import colors from '@/utils/themes/colors';
import {View, Text, StyleSheet} from 'react-native';

export const Color = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Color</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.midnightGreen,
  },
  text: {color: colors.alabster},
});
