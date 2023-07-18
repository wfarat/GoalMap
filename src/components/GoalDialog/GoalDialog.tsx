import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Dialog, Input } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import {
  addGoal,
  editGoal,
  selectDialog,
  toggleDialog,
} from 'GoalMap/src/store/goals';
import { useTheme } from '../../hooks';
import { useTranslation } from 'react-i18next';

const GoalDialog = () => {
  const { t } = useTranslation(['goals']);
  const { open, id } = useSelector(selectDialog);
  const { Common, Fonts } = useTheme();
  const { button, dialog } = Common;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const sendGoal = () => {
    if (!id) {
      dispatch(addGoal({ title, description }));
    } else {
      dispatch(editGoal({ id: id, title, description }));
    }
    dispatch(toggleDialog({}));
  };
  const handleToggle = () => {
    dispatch(toggleDialog({}));
  };
  return (
    <View>
      <Button
        icon={<Icon name="add" color={Fonts.titleLarge.color} size={20} />}
        buttonStyle={button.circle}
        onPress={handleToggle}
      />
      <Dialog
        isVisible={open}
        onBackdropPress={handleToggle}
        overlayStyle={dialog.base}
      >
        <Input
          placeholder={t('goals:title')}
          value={title}
          onChangeText={setTitle}
          inputStyle={Common.textInput}
        />
        <Input
          placeholder={t('goals:description')}
          value={description}
          onChangeText={setDescription}
          inputStyle={Common.multilineInput}
          multiline
          numberOfLines={4}
          maxLength={100}
        />
        <View style={Common.buttonContainer}>
          <Button
            icon={<Icon name="close" />}
            onPress={handleToggle}
            buttonStyle={button.base}
          />
          <Button
            icon={<Icon name="checkmark" />}
            buttonStyle={button.outline}
            onPress={sendGoal}
          />
        </View>
      </Dialog>
    </View>
  );
};

export default GoalDialog;
