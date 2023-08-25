import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainNavigator} from '@/navigation/MainNavigator';
import {StyleSheet} from 'react-native';
import colors from '@/utils/themes/colors';
import {store, persistor} from '@/state/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <SafeAreaProvider style={styles.safeAreaProvider}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaProvider: {
    backgroundColor: colors.midnightGreen,
  },
});

export default App;
