import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackScreenProps, RootStackParamList} from './types';
// import {ROOT_ROUTES} from './routes';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const ChoiceStack = createNativeStackNavigator<RootStackParamList>();
const LeftDrawer = createDrawerNavigator();
const RightDrawer = createDrawerNavigator();
// const RightDrawer =
//   createDrawerNavigator<RootStackScreenProps<ROOT_ROUTES.RIGHT_DRAWER>>();

export {RootStack, ChoiceStack, LeftDrawer, RightDrawer};
