import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Text from './src/components/TextCustom';
import Header from './src/components/Header';

const fetchFonts = () => {
  return Font.loadAsync({
    'jost-regular': require('./assets/fonts/Jost-Regular.woff'),
    'jost-medium': require('./assets/fonts/Jost-Medium.woff'),
    'jost-bold': require('./assets/fonts/Jost-Bold.woff')
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text type="medium">Test test test</Text>
    </View>
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
