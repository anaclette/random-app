import colors from '@/utils/themes/colors';
import {MoreInfoButton} from '@/components';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Animal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Animal</Text>
      <MoreInfoButton item={'Animal'} />
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
