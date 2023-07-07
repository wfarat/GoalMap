import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import QuoteScreen from '../screens/Quote/QuoteScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import ImageScreen from '../screens/Image/ImageScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Quotes"
        component={QuoteScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Images"
        component={ImageScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="images" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
