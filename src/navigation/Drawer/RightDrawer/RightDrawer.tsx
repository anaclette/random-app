import React from 'react';
import {RightDrawer} from '@/navigation';
import {ROOT_ROUTES} from '@/navigation/routes';
import {LeftDrawerScreen} from '../LeftDrawer';

export const RightDrawerScreen = () => {
  return (
    <RightDrawer.Navigator
      useLegacyImplementation={false}
      id="RightDrawer"
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        headerShadowVisible: false,
      }}>
      <RightDrawer.Screen
        options={{
          headerShadowVisible: false,
        }}
        name={ROOT_ROUTES.LEFT_DRAWER}
        component={LeftDrawerScreen}
      />
    </RightDrawer.Navigator>
  );
};
