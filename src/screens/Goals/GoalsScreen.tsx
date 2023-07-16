import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import { selectGoals } from 'GoalMap/src/store/goals';
import { useSelector } from 'react-redux';
import GoalCard from 'GoalMap/src/components/GoalCard/GoalCard';
import GoalDialog from 'GoalMap/src/components/GoalDialog/GoalDialog';

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
      <ScrollView>
        {goals.length > 0 &&
          goals.map(goal => {
            return (
              <GoalCard
                id={goal.id}
                description={goal.description}
                title={goal.title}
              />
            );
          })}
      </ScrollView>
      <GoalDialog />
    </ScrollView>
  );
};

export default GoalsScreen;
