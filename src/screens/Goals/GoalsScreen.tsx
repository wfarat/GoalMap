import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import AddGoal from 'GoalMap/src/components/AddGoal/AddGoal';
import { selectGoals } from 'GoalMap/src/store/goals';
import { useSelector } from 'react-redux';
const GoalsScreen = () => {
  const { t } = useTranslation(['welcome']);
  const { Fonts, Layout } = useTheme();
  const goals = useSelector(selectGoals);
  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.fill,
        Layout.colCenter,
        Layout.scrollSpaceBetween,
      ]}
    >
      <View>
        <Text style={[Fonts.textLarge, Fonts.textLight]}>
          {t('welcome:title')}
        </Text>
        <Text style={[Fonts.textRegular, Fonts.textLight]}>
          {t('welcome:subtitle')}
        </Text>
      </View>
      {goals.length > 0 &&
        goals.map(goal => {
          return (
            <View key={goal.id}>
              <Text>{goal.title}</Text>
              <Text>{goal.description}</Text>
            </View>
          );
        })}
      <AddGoal />
    </ScrollView>
  );
};

export default GoalsScreen;
