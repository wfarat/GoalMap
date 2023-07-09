import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Dialog, Input } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { addGoal } from 'GoalMap/src/store/goals';
const AddGoal = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const toggleDialog = () => {
    setVisible(!visible);
  };
  const sendGoal = () => {
    dispatch(addGoal({ title, description }));
    toggleDialog();
  };
  return (
    <View>
      <Button icon={<Icon name="add" />} onPress={toggleDialog} />
      <Dialog
        isVisible={visible}
        onBackdropPress={toggleDialog}
        overlayStyle={style.dialog}
      >
        <Input placeholder="Goal Title" value={title} onChangeText={setTitle} />
        <Input
          placeholder="Goal Description"
          value={description}
          onChangeText={setDescription}
        />
        <Button icon={<Icon name="close" />} onPress={toggleDialog} />
        <Button icon={<Icon name="checkmark" onPress={sendGoal} />} />
      </Dialog>
    </View>
  );
};

const style = StyleSheet.create({
  dialog: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
});

export default AddGoal;
