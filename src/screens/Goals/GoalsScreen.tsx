import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import AddGoal from 'GoalMap/src/components/AddGoal/AddGoal';
import { selectGoals, deleteGoal } from 'GoalMap/src/store/goals';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
const GoalsScreen = () => {
  const { t } = useTranslation(['welcome']);
  const { Fonts, Layout } = useTheme();
  const goals = useSelector(selectGoals);
  const dispatch = useDispatch();
  const handleDelete = (id: number) => {
    dispatch(deleteGoal({ id }));
  };
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
              <Card key={goal.id}>
                <Card.Title>{goal.title}</Card.Title>
                <Card.Divider />
                <Text>{goal.description}</Text>
                <View>
                  <Button
                    icon={<Icon name="create" size={20} />}
                    title="Edit"
                  />
                  <Button
                    icon={<Icon name="trash-bin" size={20} />}
                    title="Delete"
                    onPress={() => handleDelete(goal.id)}
                  />
                </View>
              </Card>
            );
          })}
      </ScrollView>
      <AddGoal />
    </ScrollView>
  );
};

export default GoalsScreen;
