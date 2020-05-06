import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../containers/Home/Home';
import AlbumDetail from '../containers/AlbumDetail/AlbumDetail';

const Stack = createStackNavigator();

export default RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='AlbumDetail' component={AlbumDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
