import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useTheme } from '../../hooks';
import { selectGoals } from 'GoalMap/src/store/goals';
import { useSelector } from 'react-redux';
import { GoalCard, GoalDialog } from 'GoalMap/src/components';

const GoalsScreen = () => {
  const { Layout } = useTheme();
  const goals = useSelector(selectGoals);

  return (
    <SafeAreaView style={Layout.fill}>
      <FlatList
        data={goals}
        renderItem={({ item }) => (
          <GoalCard
            id={item.id}
            description={item.description}
            title={item.title}
          />
        )}
        keyExtractor={item => `${item.id}`}
      />
      <GoalDialog />
    </SafeAreaView>
  );
};

export default GoalsScreen;
