import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useTheme } from '../../hooks';
import { selectGoals } from 'GoalMap/src/store/goals';
import { useSelector } from 'react-redux';
import { GoalCard, GoalDialog } from 'GoalMap/src/components';
import { GoalsScreenProps } from 'GoalMap/@types/navigation';

const GoalsScreen = ({ navigation }: GoalsScreenProps) => {
  const { Layout } = useTheme();
  const goals = useSelector(selectGoals);
  const handleNavigation = (id: number) => {
    navigation.navigate('GoalScreen', { id, parentId: undefined });
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

export default GoalsScreen;
