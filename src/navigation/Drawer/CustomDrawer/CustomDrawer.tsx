import {
  Image,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import Animated from 'react-native-reanimated';
import colors from '@/utils/themes/colors';
import {cartoons} from '@/utils/constants';
import {DrawerItemList} from './CustomDrawerList';
import {useDrawer} from '@/hooks/useDrawer';
import {NavProps} from '@/navigation/types';
import {setImageSource} from '@/utils/helpers/helperFunctions';
import {ROOT_ROUTES} from '@/navigation/routes';

interface Props {
  label: string;
  onPress: () => void;
  type?: string;
  name: string;
  activeItemColor?: string;
  color: string;
  source?: ImageSourcePropType;
}

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CartoonItem = ({
  label,
  onPress,
  activeItemColor,
  color,
  source,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.row, {backgroundColor: activeItemColor}]}>
      <View style={[styles.iconContainer, {backgroundColor: color}]}>
        {source && <Image style={styles.image} source={source} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export const CustomDrawer = ({navigation, descriptors, state}: NavProps) => {
  const scrollRef = useRef();

  const {
    animatedStyles,
    scrollViewStyles,
    showSecondaryMenu,
    toggleSecondaryMenu,
    secondaryMenuStyle,
  } = useDrawer();

  const showMenu = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const hideMenu = () => {
    scrollRef.current?.scrollToEnd({
      animated: true,
    });
  };

  const handleFooterPress = () => {
    showSecondaryMenu ? showMenu() : hideMenu();
    toggleSecondaryMenu();
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.marginVertical, scrollViewStyles]}>
        <DrawerItemList
          state={state}
          descriptors={descriptors}
          navigation={navigation}
        />
        <Animated.View
          style={[
            styles.view,
            {backgroundColor: colors.sunGlow},
            secondaryMenuStyle,
          ]}>
          {cartoons.map(item => (
            <CartoonItem
              onPress={() => navigation.navigate(ROOT_ROUTES.CARTOON_SCREEN)}
              key={item.title}
              label={item.title}
              color={item.color}
              name={item.title}
              source={setImageSource(item.type)}
            />
          ))}
        </Animated.View>
      </Animated.ScrollView>
      <TouchableOpacity onPress={handleFooterPress}>
        <Animated.View
          style={[styles.view, styles.marginBottom, animatedStyles]}>
          <View style={styles.footerWrapper}>
            <Image
              style={styles.logoWideImage}
              source={require('../../../assets/images/nickelodeon.png')}
            />
            <Text style={styles.footerTitle}>Random Cartoon</Text>
            <Image
              style={styles.logoImage}
              source={require('../../../assets/images/cartoon_network.png')}
            />
          </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.midnightGreen,
  },
  view: {
    backgroundColor: colors.alabster,
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    padding: 10,
  },
  marginTop: {
    marginTop: 10,
  },
  marginBottom: {
    marginBottom: 10,
  },
  marginVertical: {
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 17,
    color: colors.darkGreen,
    paddingHorizontal: 5,
    marginLeft: 20,
  },
  iconContainer: {
    padding: 5,
    margin: 5,
    backgroundColor: colors.carolinaBlue,
    borderRadius: 10,
  },
  homeImage: {
    borderRadius: 10,
    width: 50,
    height: 50,
  },
  headerTitle: {
    fontSize: 20,
    color: colors.darkGreen,
  },
  footerTitle: {
    fontSize: 17,
    color: colors.darkGreen,
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  logoImage: {
    width: 55,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 25,
  },
  logoWideImage: {
    width: 75,
    height: 50,
    borderRadius: 25,
  },
});
