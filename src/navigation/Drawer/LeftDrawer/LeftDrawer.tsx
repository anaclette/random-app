import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import {LeftDrawer} from '@/navigation';
import colors from '@/utils/themes/colors';
import {choices} from '@/utils/constants';
import {CustomDrawer} from '../CustomDrawer';

export const LeftDrawerScreen = () => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <LeftDrawer.Navigator
      useLegacyImplementation={false}
      id="LeftDrawer"
      screenOptions={{
        headerTintColor: colors.alabster,
        drawerStyle: isLargeScreen ? null : {width: '100%'},
        headerTitle: '',
        headerStyle: {
          backgroundColor: colors.midnightGreen,
        },
        headerShadowVisible: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      {choices.map(item => (
        <LeftDrawer.Screen
          key={item.label}
          name={item.route}
          component={item.component}
          options={{
            item: item,
          }}
        />
      ))}
    </LeftDrawer.Navigator>
  );
};
