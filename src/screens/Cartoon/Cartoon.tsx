import {CartoonEnum} from '@/types/enums';
import colors from '@/utils/themes/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  name: CartoonEnum;
}

export const Cartoon = ({name}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name ?? 'Cartoon'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.midnightGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.alabster,
    fontSize: 20,
  },
});
