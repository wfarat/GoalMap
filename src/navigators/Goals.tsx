import React from 'react';
import GoalScreen from '../screens/Goals/Goal/GoalScreen';
import GoalsScreen from '../screens/Goals/GoalsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { GoalsStackParamList } from 'GoalMap/@types/navigation';

const Stack = createStackNavigator<GoalsStackParamList>();

// @refresh reset
const GoalsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="GoalsScreen"
    >
      <Stack.Screen name="GoalsScreen" component={GoalsScreen} />
      <Stack.Screen name="GoalScreen" component={GoalScreen} />
    </Stack.Navigator>
  );
};

export default GoalsStack;
