import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ROOT_ROUTES} from '../../navigation/routes';
import colors from '@/utils/themes/colors';

export const ItemChoice = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(ROOT_ROUTES.MORE_INFORMATION)}>
        <Text style={styles.text}>More Information</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.midnightGreen,
  },
  button: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.alabster,
    borderRadius: 50,
    marginVertical: 10,
  },
  text: {
    color: colors.alabster,
    fontSize: 15,
    padding: 7,
  },
});
