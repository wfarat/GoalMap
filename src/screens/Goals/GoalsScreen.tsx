import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useTheme } from '../../hooks';
import { selectGoals } from 'GoalMap/src/store/goals';
import { useSelector } from 'react-redux';
import { GoalCard, GoalDialog } from 'GoalMap/src/components';
import { GoalsScreenProps } from 'GoalMap/@types/navigation';
import type { Step } from 'GoalMap/src/store/goals';

const GoalsScreen = ({ navigation }: GoalsScreenProps) => {
  const { Layout } = useTheme();
  const goals = useSelector(selectGoals);
  const handleNavigation = (stepsArray: Step[]) => {
    navigation.navigate('GoalScreen', { steps: stepsArray });
  };
  return (
    <SafeAreaView style={Layout.fill}>
      <FlatList
        data={goals}
        renderItem={({ item }) => (
          <GoalCard
            id={item.id}
            description={item.description}
            title={item.title}
            onPress={() => handleNavigation(item.steps)}
          />
        )}
        keyExtractor={item => `${item.id}`}
      />
      <GoalDialog />
    </SafeAreaView>
  );
};

export default GoalsScreen;
