import colors from '@/utils/themes/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Letter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Letter</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.midnightGreen,
  },
  text: {
    color: colors.alabster,
  },
});
