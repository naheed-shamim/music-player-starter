import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { Home } from '../containers/Home/Home';
import AlbumDetail from '../containers/AlbumDetail/AlbumDetail';
import { Screens } from './NavigatorConstants';
import { Theme } from '../CommonStyles';

const Stack = createStackNavigator();

export default RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Theme.PRIMARY_ACCENT,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          ...TransitionPresets.SlideFromRightIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name={Screens.Home} component={Home} />
        <Stack.Screen name={Screens.AlbumDetail} component={AlbumDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
