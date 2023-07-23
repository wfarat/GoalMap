import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useTheme } from '../../../hooks';
import { GoalCard, GoalDialog } from 'GoalMap/src/components';
import { GoalScreenProps } from 'GoalMap/@types/navigation';
import type { Step } from 'GoalMap/src/store/goals';

const GoalScreen = ({ navigation, route }: GoalScreenProps) => {
  const { Layout } = useTheme();
  const { steps } = route.params;
  const handleNavigation = (stepsArray: Step[]) => {
    navigation.navigate('GoalScreen', { steps: stepsArray });
  };
  return (
    <SafeAreaView style={Layout.fill}>
      <FlatList
        data={steps}
        renderItem={({ item }) => (
          <GoalCard
            id={item.id}
            title={item.name}
            onPress={() => handleNavigation(item.steps)}
          />
        )}
        keyExtractor={item => `${item.id}`}
      />
      <GoalDialog />
    </SafeAreaView>
  );
};

export default GoalScreen;
