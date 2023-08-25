import React from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Cartoon, ItemChoice, MoreInformation} from '@/screens';
import {RootStack} from '..';
import {RightDrawerScreen} from '../Drawer';
import {ROOT_ROUTES} from '../routes';
import colors from '@/utils/themes/colors';
import {mainNavigatorOptions} from '@/utils/themes/common';

export const MainNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: colors.midnightGreen,
        },
      }}
      initialRouteName={ROOT_ROUTES.HOME}>
      <RootStack.Screen
        options={{
          header: () => (
            <SafeAreaView style={styles.container}>
              <TouchableOpacity onPress={() => undefined} style={styles.button}>
                <Text style={styles.title}>R a n d o m</Text>
              </TouchableOpacity>
            </SafeAreaView>
          ),
          ...mainNavigatorOptions,
        }}
        name={ROOT_ROUTES.RIGHT_DRAWER}
        component={RightDrawerScreen}
      />
      <RootStack.Screen
        options={{
          ...mainNavigatorOptions,
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.midnightGreen,
          },
        }}
        name={ROOT_ROUTES.MORE_INFORMATION}
        component={MoreInformation}
      />
      <RootStack.Screen name={ROOT_ROUTES.ITEM_CHOICE} component={ItemChoice} />
      <RootStack.Screen
        options={{
          ...mainNavigatorOptions,
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.midnightGreen,
          },
        }}
        name={ROOT_ROUTES.CARTOON_SCREEN}
        component={Cartoon}
      />
    </RootStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    width: '100%',
    borderWidth: 2,
    borderColor: colors.alabster,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
  },
  title: {
    alignSelf: 'center',
    marginVertical: 15,
    fontSize: 20,
    color: colors.alabster,
  },
});
