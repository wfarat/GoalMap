import React from 'react';
import { Main, Quotes } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="Quotes" component={Quotes} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
