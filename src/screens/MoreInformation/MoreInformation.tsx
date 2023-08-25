import colors from '@/utils/themes/colors';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const MoreInformation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>More Information Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.alabster,
    fontSize: 20,
  },
});
