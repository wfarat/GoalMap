import React from 'react';
import { Button } from '@rneui/themed';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTheme } from 'GoalMap/src/hooks';
import { toggleDialog } from 'GoalMap/src/store/goals';
import type { Goal } from '../../store/goals';
import { SettingsIcon } from '../index';

const GoalCard = (props: Partial<Goal>) => {
  const dispatch = useDispatch();
  const { Common } = useTheme();
  const { card, button, settings } = Common;

  const handleEdit = (id: number | undefined) => {
    dispatch(toggleDialog({ id }));
  };
  return (
    <View style={card.base}>
      <View style={settings.top}>
        <Button
          icon={SettingsIcon}
          onPress={() => handleEdit(props.id)}
          buttonStyle={button.circle}
        />
      </View>
      <Text>{props.description}</Text>
      <Text>{props.description}</Text>
    </View>
  );
};

export default GoalCard;
