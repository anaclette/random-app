import colors from '@/utils/themes/colors';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Password = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Password</Text>
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
