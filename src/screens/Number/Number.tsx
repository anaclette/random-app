import colors from '@/utils/themes/colors';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Number = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Number</Text>
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
