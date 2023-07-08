import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import QuoteScreen from '../screens/Quote/QuoteScreen';
import GoalsScreen from '../screens/Goals/GoalsScreen';
import ImageScreen from '../screens/Image/ImageScreen';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const { t } = useTranslation(['common']);
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name={t('common:tabs.goals')}
        component={GoalsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="checkmark-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={t('common:tabs.quotes')}
        component={QuoteScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={t('common:tabs.images')}
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
