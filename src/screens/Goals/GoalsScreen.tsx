import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import AddGoal from 'GoalMap/src/components/AddGoal/AddGoal';
import { selectGoals } from 'GoalMap/src/store/goals';
import { useSelector } from 'react-redux';
import { Card, Button, Icon } from '@rneui/themed';

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
      <View>
        {goals.length > 0 &&
          goals.map(goal => {
            return (
              <Card key={goal.id}>
                <Card.Title>{goal.title}</Card.Title>
                <Card.Divider />
                <Text>{goal.description}</Text>
                <Button icon={<Icon name="code" />} />
              </Card>
            );
          })}
      </View>
      <AddGoal />
    </ScrollView>
  );
};

export default GoalsScreen;
