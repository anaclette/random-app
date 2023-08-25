import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavProps} from '@/navigation/types';
import colors from '@/utils/themes/colors';
import {setImageSource} from '@/utils/helpers/helperFunctions';
import {Item} from '@/types/types';

interface Props {
  label: Item | string;
  onPress?: () => void;
  type?: string;
  name?: string;
  activeItemColor: string | null;
  color: string;
}

export const DrawerItem = ({label, onPress, activeItemColor, color}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      accessibilityRole="button"
      style={[styles.drawerItem, {backgroundColor: activeItemColor as string}]}>
      <View style={styles.row}>
        <Image
          source={setImageSource(label.toLowerCase() as Item)}
          style={styles.image}
        />
        <Text style={[styles.label, {color}]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const DrawerItemList = ({state, navigation}: NavProps) => {
  return (
    <View style={styles.view}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const drawerItem = route.name;

        const color = isFocused ? colors.lightOil : colors.eerieBlack;
        const activeItemColor = isFocused ? colors.midnightGreen : null;

        return (
          <DrawerItem
            key={drawerItem}
            label={drawerItem}
            onPress={() => navigation.navigate(drawerItem)}
            color={color}
            activeItemColor={activeItemColor}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.alabster,
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    padding: 10,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 45,
    borderRadius: 25,
    height: 45,
  },
  label: {
    fontSize: 17,
    color: colors.midnightGreen,
    paddingHorizontal: 5,
    marginLeft: 20,
  },
});
