import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ROOT_ROUTES, HOME_ROUTES} from './routes';
import {DrawerScreenProps} from '@react-navigation/drawer';

import type {DrawerNavigationState, RouteProp} from '@react-navigation/native';
import {
  DrawerNavigationHelpers,
  DrawerDescriptorMap,
} from '@react-navigation/drawer/lib/typescript/src/types';

export type RootStackParamList = {
  [ROOT_ROUTES.HOME]: undefined;
  [ROOT_ROUTES.ITEM_CHOICE]: undefined;
  [ROOT_ROUTES.MORE_INFORMATION]: {title: string};
  [ROOT_ROUTES.LEFT_DRAWER]: undefined;
  [ROOT_ROUTES.RIGHT_DRAWER]: undefined;
  [ROOT_ROUTES.CARTOON_SCREEN]: undefined;
};

export type ItemChoiceScreenRouteProp = RouteProp<
  RootStackParamList,
  ROOT_ROUTES.ITEM_CHOICE
>;

export type HomeDrawersParamList = {
  [HOME_ROUTES.RIGHT_DRAWER]: NavigatorScreenParams<RootStackParamList>;
  [HOME_ROUTES.LEFT_DRAWER]: NavigatorScreenParams<RootStackParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HomeDrawersScreenProps<T extends keyof HomeDrawersParamList> =
  CompositeScreenProps<
    DrawerScreenProps<HomeDrawersParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type NavProps = {
  state: DrawerNavigationState<RootStackParamList>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};
