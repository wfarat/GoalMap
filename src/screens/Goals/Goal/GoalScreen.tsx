import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useTheme } from '../../../hooks';
import { selectGoals } from 'GoalMap/src/store/goals';
import { useSelector } from 'react-redux';
import { GoalCard, GoalDialog } from 'GoalMap/src/components';

const GoalScreen = ({ navigation, route }) => {
  const { Layout } = useTheme();
  const { id } = route.params;
  const goals = useSelector(selectGoals);
  const handleNavigation = (goalId: number) => {
    navigation.navigate('GoalScreen', { id: goalId });
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
            onPress={handleNavigation}
          />
        )}
        keyExtractor={item => `${item.id}`}
      />
      <GoalDialog />
    </SafeAreaView>
  );
};

export default GoalScreen;
