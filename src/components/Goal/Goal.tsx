import React from 'react';
import { Card, Button } from '@rneui/themed';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { useTheme } from 'GoalMap/src/hooks';
import { deleteGoal } from 'GoalMap/src/store/goals';
import type { Goal } from '../../store/goals';

const GoalCard = (props: Partial<Goal>) => {
  const dispatch = useDispatch();
  const { Common } = useTheme();
  const handleDelete = (id: number | undefined) => {
    dispatch(deleteGoal({ id }));
  };
  return (
    <Card key={props.id}>
      <Card.Title>{props.title}</Card.Title>
      <Card.Divider />
      <Text>{props.description}</Text>
      <View style={Common.buttonContainer}>
        <Button icon={<Icon name="create" size={20} />} title="Edit" />
        <Button
          icon={<Icon name="trash-bin" size={20} />}
          title="Delete"
          onPress={() => handleDelete(props.id)}
        />
      </View>
    </Card>
  );
};

export default GoalCard;
