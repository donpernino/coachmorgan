import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './src/components/Screens/DrawerContent';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './src/components/Screens/HomeScreen';
import FormScreen from './src/components/Screens/FormScreen';
import ProfileScreen from './src/components/Screens/ProfileScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'jost-regular': require('./assets/fonts/Jost-Regular.ttf'),
    'jost-medium': require('./assets/fonts/Jost-Medium.ttf'),
    'jost-bold': require('./assets/fonts/Jost-Bold.ttf')
  });
};

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'jost-regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'jost-medium',
      fontWeight: '600',
    },
    bold: {
      fontFamily: 'jost-medium',
      fontWeight: '700',
    },
  },
}

fontConfig.ios = fontConfig.default;
fontConfig.android = fontConfig.default;

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig)
}

const Drawer = createDrawerNavigator();

function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )
  }

  {console.log(theme)}

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
          <Drawer.Screen name="Form" component={FormScreen}></Drawer.Screen>
          <Drawer.Screen name="Profile" component={ProfileScreen}></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fontRegular: {
    fontFamily: 'jost-regular'
  },
  fontMedium: {
    fontFamily: 'jost-medium'
  },
  fontBold: {
    fontFamily: 'jost-bold'
  }
});

export default App;