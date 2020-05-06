import React from 'react';
import { SafeAreaView } from 'react-native';
import RootNavigator from './src/navigator/RootNavigator';
import CommonStyles from './src/CommonStyles';

export default function App() {
  return (
    <SafeAreaView style={CommonStyles.droidSafeArea}>
      <RootNavigator />
    </SafeAreaView>
  );
}
