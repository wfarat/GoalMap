import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useTheme } from '../../../hooks';
import { selectStepsById } from 'GoalMap/src/store/goals';
import { useSelector } from 'react-redux';
import { GoalCard, StepDialog } from 'GoalMap/src/components';
import { GoalScreenProps } from 'GoalMap/@types/navigation';
import type { Goals } from 'GoalMap/src/store/goals';
const GoalScreen = ({ navigation, route }: GoalScreenProps) => {
  const { Layout } = useTheme();
  const { id, parentId } = route.params;
  const steps = useSelector((state: { goals: Goals }) =>
    selectStepsById(state, id, parentId),
  );
  const handleNavigation = (goalId: number, parent: number) => {
    navigation.navigate('GoalScreen', { id: goalId, parentId: parent });
  };
  return (
    <SafeAreaView style={Layout.fill}>
      <FlatList
        data={steps}
        renderItem={({ item }) => (
          <GoalCard
            id={item.id}
            title={item.name}
            onPress={() => handleNavigation(item.id, item.parentId)}
          />
        )}
        keyExtractor={item => `${item.id}`}
      />
      <StepDialog parentId={id} />
    </SafeAreaView>
  );
};

export default GoalScreen;
