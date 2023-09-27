import {ROOT_ROUTES} from '@/navigation/routes';
import colors from '@/utils/themes/colors';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const MoreInfoButton = ({item}: {item: string}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate(ROOT_ROUTES.MORE_INFORMATION)}>
        <Text style={styles.text}>More information about {item}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.alabster,
  },
});
